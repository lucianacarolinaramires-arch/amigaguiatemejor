const fs = require('fs');
const path = require('path');
const data = require('./pages-data.js');

const rootDir = path.join(__dirname, '..');
const templatePath = path.join(__dirname, 'template.html');

if (!fs.existsSync(templatePath)) {
  console.error("No se encontró la plantilla HTML en:", templatePath);
  process.exit(1);
}

const template = fs.readFileSync(templatePath, 'utf8');

// Checker HTML Code for the main page
const scannerHtml = `
<section class="section" id="escaneador" style="background: rgba(11, 19, 43, 0.2); width: 100%; border-radius: var(--radius-md); padding: 30px; margin-top: 40px; border: 1px solid var(--border-light);">
  <div class="scanner-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; align-items: center;">
    <div class="scanner-visual" style="background: var(--bg-deep); border: 1px solid var(--border-light); border-radius: var(--radius-sm); padding: 20px;">
      <div class="scanner-head" style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid var(--border-light); padding-bottom: 10px; margin-bottom: 15px;">
        <span class="scanner-title" style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted);">VERIFICADOR DE DOMINIOS V1.4</span>
        <div class="window-dots" style="display: flex; gap: 6px;">
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #ff5f56;"></span>
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #ffbd2e;"></span>
          <span style="width: 8px; height: 8px; border-radius: 50%; background: #27c93f;"></span>
        </div>
      </div>
      <div class="scanner-input-group" style="display: flex; gap: 10px; margin-bottom: 15px;">
        <input type="text" class="scanner-input" placeholder="Ingresa una URL (ej. bancamiga.com)..." value="https://www.bancamiga.com" style="flex: 1; padding: 12px; background: rgba(0,0,0,0.2); border: 1px solid var(--border-light); border-radius: var(--radius-sm); color: var(--text-white); font-family: var(--font-sans);">
        <button class="scanner-btn" type="button" style="padding: 12px 24px; background: var(--primary); color: var(--text-white); border: none; border-radius: var(--radius-sm); font-weight: bold; cursor: pointer; transition: var(--transition);">Analizar</button>
      </div>
      <div class="scanner-results" style="position: relative;">
        <div class="scan-line-progress" style="height: 3px; background: var(--accent); width: 0%; transition: width 0.3s; margin-bottom: 15px; border-radius: 2px;"></div>
        <div class="scan-status-text" style="font-weight: bold; color: var(--text-muted); font-size: 14px; margin-bottom: 10px;">Listo para iniciar verificación de enlace.</div>
        <ul class="scan-output-list" style="list-style: none; font-size: 13px; color: var(--text-muted); display: flex; flex-direction: column; gap: 8px;">
          <li>Ingresa cualquier enlace que hayas recibido por mensaje para analizar su procedencia oficial.</li>
        </ul>
      </div>
    </div>
    <div class="scanner-content">
      <div class="section-kicker" style="font-family: var(--font-mono); font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent); margin-bottom: 8px;">Módulo Interactivo</div>
      <h3 style="font-size: 24px; margin-bottom: 15px;">Valida el dominio del sitio web</h3>
      <p style="margin-bottom: 20px;">
        ¿Has recibido un mensaje por SMS, WhatsApp o un correo electrónico con un enlace que dice llevarte a tu banco? Usa nuestra herramienta interactiva para verificar si el enlace corresponde a un servidor oficial de <b>Bancamiga Universal C.A.</b> o si representa un riesgo para ti.
      </p>
      <div class="checklist-items" style="display: flex; flex-direction: column; gap: 15px;">
        <div class="check-item" style="display: flex; gap: 12px;">
          <div class="check-item-icon" style="background: rgba(97, 166, 14, 0.15); color: var(--accent); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">✓</div>
          <div class="check-item-text">
            <b style="color: var(--text-white); font-size: 15px;">Análisis en tiempo real</b>
            <p style="font-size: 13px; margin-top: 2px;">Evalúa el formato, estructura y protocolo de conexión en un instante.</p>
          </div>
        </div>
        <div class="check-item" style="display: flex; gap: 12px;">
          <div class="check-item-icon" style="background: rgba(97, 166, 14, 0.15); color: var(--accent); width: 24px; height: 24px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 14px; flex-shrink: 0;">✓</div>
          <div class="check-item-text">
            <b style="color: var(--text-white); font-size: 15px;">Base de datos oficial</b>
            <p style="font-size: 13px; margin-top: 2px;">Verifica contra el registro certificado de dominios de la institución bancaria.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`;

console.log(`Iniciando generación de ${data.pages.length} páginas...`);

// Helper to generate schema structures
function getPageSchema(page) {
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": page.title,
    "description": page.meta_description,
    "inLanguage": "es-VE",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Guía Amiga",
      "url": "https://bancamaigaslogin.onrender.com/"
    }
  }, null, 2);
}

function getFAQSchema(page) {
  if (!page.faqs || page.faqs.length === 0) return "";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": page.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
  return `<script type="application/ld+json">\n${JSON.stringify(faqSchema, null, 2)}\n</script>`;
}

function getBreadcrumbsSchema(page) {
  const items = [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://bancamaigaslogin.onrender.com/"
    }
  ];
  
  if (page.slug !== 'index') {
    items.push({
      "@type": "ListItem",
      "position": 2,
      "name": "Directorio",
      "item": "https://bancamaigaslogin.onrender.com/directorio.html"
    });
    items.push({
      "@type": "ListItem",
      "position": 3,
      "name": page.h1,
      "item": `https://bancamaigaslogin.onrender.com/${page.slug}.html`
    });
  }
  
  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items
  }, null, 2);
}

// Loop through each page and compile it
data.pages.forEach(page => {
  let contentHtml = page.main_content;
  
  // Replace interactive scanner placeholder if index page
  if (page.slug === 'index') {
    contentHtml = contentHtml.replace('<div id="scanner-container"></div>', scannerHtml);
  }
  
  // Build breadcrumbs HTML
  let breadcrumbsHtml = `<span>Inicio</span>`;
  if (page.slug !== 'index') {
    breadcrumbsHtml = `<a href="index.html" style="color: var(--text-muted); text-decoration: none;">Inicio</a> &raquo; <a href="directorio.html" style="color: var(--text-muted); text-decoration: none;">Directorio</a> &raquo; <span style="color: var(--accent);">${page.h1}</span>`;
  }
  
  // Build FAQ Accordion HTML
  let faqHtml = "";
  if (page.faqs && page.faqs.length > 0) {
    faqHtml = page.faqs.map(faq => `
      <div class="faq-item">
        <div class="faq-header">
          <h3>${faq.q}</h3>
          <span class="faq-icon-toggle">+</span>
        </div>
        <div class="faq-body">
          <div class="faq-body-content">
            ${faq.a}
          </div>
        </div>
      </div>
    `).join('\n');
  }
  
  // Build Related Links (silo matching the same category)
  const relatedPages = data.pages
    .filter(p => p.category === page.category && p.slug !== page.slug)
    .slice(0, 3); // Get top 3 related pages in same category
    
  // If we don't have enough, grab others
  if (relatedPages.length < 3) {
    const extraPages = data.pages.filter(p => p.slug !== page.slug && !relatedPages.includes(p)).slice(0, 3 - relatedPages.length);
    relatedPages.push(...extraPages);
  }
  
  let relatedLinksHtml = relatedPages.map(rp => `
    <article class="step-card" style="display: flex; flex-direction: column; justify-content: space-between; height: 100%;">
      <div>
        <span class="step-num">${data.categories[rp.category].icon}</span>
        <h3 style="margin-top: 15px; font-size: 18px;">${rp.h1}</h3>
        <p style="font-size: 13px; line-height: 1.5; margin-top: 8px; color: var(--text-muted);">${rp.meta_description.substring(0, 100)}...</p>
      </div>
      <a href="${rp.slug}.html" style="margin-top: 15px; color: var(--accent); text-decoration: none; font-weight: bold; font-size: 14px; display: inline-flex; align-items: center; gap: 4px;">Leer más &rarr;</a>
    </article>
  `).join('\n');

  // Replace all slots in the template
  let pageOutput = template
    .replace(/\{\{title\}\}/g, page.title)
    .replace(/\{\{meta_description\}\}/g, page.meta_description)
    .replace(/\{\{canonical\}\}/g, `https://bancamaigaslogin.onrender.com/${page.slug}.html`)
    .replace(/\{\{\{page_schema\}\}\}/g, getPageSchema(page))
    .replace(/\{\{\{faq_schema\}\}\}/g, getFAQSchema(page))
    .replace(/\{\{\{breadcrumbs_schema\}\}\}/g, getBreadcrumbsSchema(page))
    .replace(/\{\{\{breadcrumbs_html\}\}\}/g, breadcrumbsHtml)
    .replace(/\{\{\{h1\}\}\}/g, page.h1)
    .replace(/\{\{\{introduction\}\}\}/g, page.introduction)
    .replace(/\{\{\{main_content\}\}\}/g, contentHtml)
    .replace(/\{\{has_faq\}\}/g, (page.faqs && page.faqs.length > 0) ? "true" : "")
    .replace(/\{\{\{faq_html\}\}\}/g, faqHtml)
    .replace(/\{\{\{related_links_html\}\}\}/g, relatedLinksHtml);

  // Write compiled HTML file
  const outputPath = path.join(rootDir, `${page.slug}.html`);
  fs.writeFileSync(outputPath, pageOutput, 'utf8');
});

// GENERATE directorio.html (THE COMPLETE ARTICLES DIRECTORY)
const categoriesArray = Object.keys(data.categories).map(catKey => {
  const cat = data.categories[catKey];
  const catPages = data.pages.filter(p => p.category === catKey);
  return {
    key: catKey,
    name: cat.name,
    desc: cat.desc,
    icon: cat.icon,
    pages: catPages
  };
});

let directoryBodyHtml = `
  <h2>Índice General de Guías de Seguridad y Soporte</h2>
  <p>Explora nuestras más de 100 guías y tutoriales independientes organizados por categorías. Aprende a navegar de forma segura y sacar el máximo provecho a tus servicios bancarios.</p>
  
  <div class="directory-container" style="margin-top: 40px; display: flex; flex-direction: column; gap: 40px;">
`;

categoriesArray.forEach(cat => {
  directoryBodyHtml += `
    <div class="directory-category-card" style="background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 30px;">
      <div style="display: flex; align-items: center; gap: 15px; margin-bottom: 20px; border-bottom: 1px solid var(--border-light); padding-bottom: 15px;">
        <span style="font-size: 32px;">${cat.icon}</span>
        <div>
          <h3 style="font-size: 22px; color: var(--text-white);">${cat.name}</h3>
          <p style="font-size: 14px; color: var(--text-muted); margin-top: 2px;">${cat.desc}</p>
        </div>
      </div>
      <ul style="list-style: none; display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 12px; padding: 0;">
  `;
  
  cat.pages.forEach(p => {
    directoryBodyHtml += `
      <li style="margin: 0; padding: 0; display: flex; align-items: flex-start; gap: 8px;">
        <span style="color: var(--accent); font-weight: bold;">&bull;</span>
        <a href="${p.slug}.html" title="${p.title}" style="color: var(--text-main); text-decoration: none; transition: var(--transition); font-size: 14px;">${p.h1}</a>
      </li>
    `;
  });
  
  directoryBodyHtml += `
      </ul>
    </div>
  `;
});

directoryBodyHtml += `</div>`;

// Compile and write directorio.html
const directoryPageObj = {
  slug: 'directorio',
  category: 'seguridad',
  title: 'Directorio de Guías y Tutoriales Bancamiga | Guía Amiga',
  meta_description: 'Explora nuestro índice completo con más de 100 tutoriales e instructivos de seguridad e información sobre el portal de Bancamiga en línea.',
  h1: 'Directorio Completo de Guías',
  introduction: 'Accede a la base de conocimientos más completa sobre el uso correcto, seguro y eficiente de los canales de pago digitales, cuentas, puntos de venta y sucursales en todo el país.',
  main_content: directoryBodyHtml,
  faqs: []
};

let directoryOutput = template
  .replace(/\{\{title\}\}/g, directoryPageObj.title)
  .replace(/\{\{meta_description\}\}/g, directoryPageObj.meta_description)
  .replace(/\{\{canonical\}\}/g, `https://bancamaigaslogin.onrender.com/directorio.html`)
  .replace(/\{\{\{page_schema\}\}\}/g, getPageSchema(directoryPageObj))
  .replace(/\{\{\{faq_schema\}\}\}/g, "")
  .replace(/\{\{\{breadcrumbs_schema\}\}\}/g, getBreadcrumbsSchema(directoryPageObj))
  .replace(/\{\{\{breadcrumbs_html\}\}\}/g, `<a href="index.html" style="color: var(--text-muted); text-decoration: none;">Inicio</a> &raquo; <span style="color: var(--accent);">Directorio</span>`)
  .replace(/\{\{\{h1\}\}\}/g, directoryPageObj.h1)
  .replace(/\{\{\{introduction\}\}\}/g, directoryPageObj.introduction)
  .replace(/\{\{\{main_content\}\}\}/g, directoryPageObj.main_content)
  .replace(/\{\{has_faq\}\}/g, "")
  .replace(/\{\{\{faq_html\}\}\}/g, "")
  .replace(/\{\{\{related_links_html\}\}\}/g, `
    <article class="step-card">
      <span class="step-num">🛡️</span>
      <h3>Seguridad Digital</h3>
      <p>Evita estafas virtuales y phishing siguiendo nuestras guías recomendadas.</p>
      <a href="phishing-reconocer-paginas-falsas-bancamiga.html" style="color: var(--accent); font-weight: bold; text-decoration: none;">Leer más &rarr;</a>
    </article>
    <article class="step-card">
      <span class="step-num">💵</span>
      <h3>Mesa de Cambio</h3>
      <p>Aprende el funcionamiento legal y oficial de compra y venta de divisas.</p>
      <a href="compra-divisas-bancamiga.html" style="color: var(--accent); font-weight: bold; text-decoration: none;">Leer más &rarr;</a>
    </article>
    <article class="step-card">
      <span class="step-num">⌨️</span>
      <h3>Soporte de POS</h3>
      <p>Conoce los manuales y cómo solucionar fallas de conexión de tus puntos de venta.</p>
      <a href="solucionar-error-conexion-pos.html" style="color: var(--accent); font-weight: bold; text-decoration: none;">Leer más &rarr;</a>
    </article>
  `);

fs.writeFileSync(path.join(rootDir, 'directorio.html'), directoryOutput, 'utf8');

// GENERATE sitemap.xml
const today = new Date().toISOString().split('T')[0];
let sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://bancamaigaslogin.onrender.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://bancamaigaslogin.onrender.com/directorio.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
`;

data.pages.forEach(p => {
  if (p.slug === 'index') return; // Skip index as it is mapped above
  sitemapXml += `  <url>
    <loc>https://bancamaigaslogin.onrender.com/${p.slug}.html</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

sitemapXml += `</urlset>\n`;
fs.writeFileSync(path.join(rootDir, 'sitemap.xml'), sitemapXml, 'utf8');

console.log(`Generación completada con éxito. Se crearon ${data.pages.length} artículos más 'directorio.html' y 'sitemap.xml'.`);
