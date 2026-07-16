const categories = {
  'seguridad': {
    name: 'Seguridad y Prevención',
    desc: 'Guías para evitar fraudes, verificar enlaces y proteger tu banca digital.',
    icon: '🛡️'
  },
  'puntos-de-venta': {
    name: 'Puntos de Venta (POS)',
    desc: 'Manuales, solicitudes y solución de problemas para tus terminales de pago.',
    icon: '⌨️'
  },
  'cuentas': {
    name: 'Cuentas Bancarias',
    desc: 'Tipos de cuentas, requisitos de apertura y trámites en línea.',
    icon: '🏦'
  },
  'tarjetas': {
    name: 'Tarjetas y Medios de Pago',
    desc: 'Tarjetas Mastercard Débito y Crédito, activación y límites.',
    icon: '💳'
  },
  'servicios': {
    name: 'Servicios y Divisas',
    desc: 'Mesa de cambio, compra de divisas, Zelle, PayPal y pago móvil.',
    icon: '💵'
  },
  'agencias': {
    name: 'Agencias y Sucursales',
    desc: 'Ubicaciones de agencias en toda Venezuela y consejos para visitarlas.',
    icon: '📍'
  }
};

// Start with hand-coded core pages to match current features but with perfect formatting
const corePages = [
  {
    slug: 'index',
    category: 'seguridad',
    title: 'Bancamiga en línea: Acceso Seguro y Verificación | Guía Amiga',
    meta_description: '¿Buscas Bancamiga en línea? Guía Amiga te orienta de forma independiente para identificar el portal oficial de Bancamiga Universal C.A. y navegar seguro.',
    h1: 'Acceso verificado a Bancamiga en línea',
    introduction: 'Esta es una guía de seguridad independiente creada para orientarte en tu navegación diaria. Aprende a identificar con total precisión el portal oficial de Bancamiga Universal C.A. y mantén tus finanzas protegidas de fraudes digitales.',
    main_content: `
      <h2>Ingreso seguro en 3 sencillos pasos</h2>
      <p>Sigue estas pautas antes de iniciar cualquier operación digital para asegurar la integridad de tu información bancaria.</p>
      <ul>
        <li><b>Escribe la Dirección:</b> Escribe manualmente www.bancamiga.com en la barra de direcciones de tu navegador web. Evita realizar búsquedas abiertas en motores públicos para acceder.</li>
        <li><b>Verifica el Candado:</b> Comprueba que la barra de direcciones muestre el ícono del candado cerrado y el protocolo https://, lo que asegura una conexión cifrada punto a punto.</li>
        <li><b>Protección de Claves:</b> El banco oficial nunca solicitará tu contraseña completa, código token o clave dinámica a través de correos, llamadas, WhatsApp o redes sociales.</li>
      </ul>
      
      <!-- Placeholder for Interactive URL Checker Simulator -->
      <div id="scanner-container"></div>
    `,
    faqs: [
      { q: '¿Cómo acceder a Bancamiga en línea?', a: 'Para ingresar de forma segura a Bancamiga en línea, escribe la dirección oficial directamente en tu navegador: https://www.bancamiga.com/. Nunca utilices enlaces enviados por mensajería o correos sospechosos.' },
      { q: '¿Guía Amiga solicita información personal o de cuentas?', a: 'No. Guía Amiga es una iniciativa puramente informativa e independiente. Nunca te pediremos usuarios, claves, números de tarjeta o códigos OTP.' },
      { q: '¿Qué debo hacer ante sospechas de phishing?', a: 'Si sospechas de un sitio web o mensaje, no ingreses información. Cierra la ventana de inmediato y comunícate con el soporte oficial de Bancamiga por sus canales autorizados.' }
    ]
  },
  {
    slug: 'bancamiga-en-linea',
    category: 'cuentas',
    title: 'Banca en Línea Personas y Empresas: Acceso | Guía Amiga',
    meta_description: 'Guía independiente de acceso seguro a la banca en línea de Bancamiga. Recomendaciones clave para entrar a personas y empresas sin intermediarios.',
    h1: 'Portal de Acceso a Bancamiga en Línea',
    introduction: 'La banca por internet de Bancamiga permite realizar transferencias, pago móvil y mesas de cambio de forma rápida. Conoce los lineamientos de acceso para operar sin intermediarios ni riesgos.',
    main_content: `
      <h2>Evita enlaces fraudulentos al acceder a tu banca</h2>
      <p>Los ciberdelincuentes a menudo compran anuncios o envían correos imitando la apariencia de Bancamiga en línea online. Sigue estas recomendaciones:</p>
      <ul>
        <li><b>Verifica el dominio:</b> El único portal autorizado para operaciones de banca por internet es bancamiga.com. Desconfía de direcciones similares como bancoamiga o bancamigavenezuela.</li>
        <li><b>Usa la App Oficial:</b> Para mayor comodidad y seguridad desde tu móvil, descarga Bancamiga Suite únicamente desde las tiendas oficiales de Google Play o Apple App Store.</li>
        <li><b>Autenticación Doble:</b> Activa siempre las notificaciones y los códigos dinámicos para autorizar tus transferencias y pagos móviles de manera controlada.</li>
      </ul>
    `,
    faqs: [
      { q: '¿Qué es y para qué sirve Bancamiga en línea?', a: 'Es la plataforma digital oficial del banco que permite a las personas naturales y jurídicas realizar transferencias, pago móvil, compra de divisas y consultas de saldo cómodamente a través de internet de manera ágil y segura.' },
      { q: '¿Qué es el phishing y cómo detectarlo en mi banca?', a: 'El phishing es una técnica fraudulenta en la que ciberdelincuentes imitan la apariencia del banco en un portal web falso para robar contraseñas. Puedes detectarlo observando faltas de ortografía en la dirección (URL) o si recibes llamadas solicitando tus códigos SMS.' }
    ]
  },
  {
    slug: 'registrarse-bancamiga',
    category: 'cuentas',
    title: 'Cómo Registrarse y Afiliarse en Línea | Guía Amiga',
    meta_description: 'Guía paso a paso para el registro por primera vez en la plataforma digital de Bancamiga. Requisitos, datos requeridos y recomendaciones.',
    h1: 'Afiliación por primera vez en Bancamiga',
    introduction: 'Si eres cliente de Bancamiga y necesitas crear tu usuario por primera vez para acceder a la banca digital, te explicamos cómo completar el registro paso a paso sin contratiempos.',
    main_content: `
      <h2>Requisitos Previos para el Registro</h2>
      <p>Antes de comenzar el proceso de afiliación digital, asegúrate de tener a la mano lo siguiente:</p>
      <ul>
        <li>Tu documento de identidad original (Cédula de Identidad o RIF en formato digital/físico).</li>
        <li>La tarjeta de débito Mastercard de Bancamiga activa que te entregaron en la sucursal.</li>
        <li>El número de teléfono móvil y el correo electrónico asociados en la ficha de apertura de tu cuenta.</li>
      </ul>
      
      <h2>Paso a Paso del Registro Digital</h2>
      <p>Sigue las siguientes instrucciones en el sitio oficial:</p>
      <ol>
        <li>Visita la página web oficial <b>www.bancamiga.com</b>.</li>
        <li>Haz clic en la opción <b>Bancamiga en Línea</b> y luego en <b>Registrarse</b>.</li>
        <li>Ingresa el número de tu tarjeta de débito y tu cédula de identidad.</li>
        <li>Confirma los códigos de validación que llegarán por SMS o correo electrónico.</li>
        <li>Crea tu nombre de usuario y una contraseña robusta que no compartas con nadie.</li>
      </ol>
    `,
    faqs: [
      { q: '¿Es necesario ir al banco para registrarse?', a: 'No, una vez que abres tu cuenta en la agencia y recibes tu tarjeta de débito, la afiliación al portal digital la realizas por tu cuenta desde cualquier dispositivo conectado a internet.' },
      { q: '¿Qué hago si no me llega el SMS de confirmación?', a: 'Verifica que tu línea móvil tenga buena señal. Si el problema persiste, es probable que debas actualizar tus datos de contacto en una agencia de Bancamiga.' }
    ]
  },
  {
    slug: 'bancamiga-zelle',
    category: 'servicios',
    title: 'Activar Zelle en Bancamiga: Requisitos y Uso | Guía Amiga',
    meta_description: 'Aprende cómo activar el servicio de Zelle a través de tu cuenta de Bancamiga de manera directa y segura. Límites y comisiones del servicio.',
    h1: 'Uso y Activación de Zelle en Bancamiga',
    introduction: 'Bancamiga ofrece la posibilidad de recibir y enviar transferencias Zelle de forma integrada en sus cuentas internacionales. Te explicamos los pasos y condiciones para configurar este canal de pago.',
    main_content: `
      <h2>¿Cómo funciona Zelle en Bancamiga?</h2>
      <p>El servicio de Zelle permite conectar cuentas en dólares con el sistema bancario estadounidense para agilizar las transferencias sin demoras de transferencias tipo ACH convencionales.</p>
      <ul>
        <li><b>Requisitos de Cuenta:</b> Debes poseer una cuenta de custodia internacional activa en Bancamiga.</li>
        <li><b>Registro en Línea:</b> La vinculación y configuración del correo de Zelle se realiza desde el módulo de configuración dentro de Bancamiga en Línea.</li>
        <li><b>Límites de Envío:</b> El banco establece límites diarios y mensuales de transferencia que puedes consultar en su sitio web actualizado.</li>
      </ul>
    `,
    faqs: [
      { q: '¿Cuáles son las comisiones de Zelle en Bancamiga?', a: 'La recepción suele estar libre de costo o tener tasas bajas, mientras que el envío aplica comisiones variables autorizadas por el banco que se debitan de tu saldo en divisas.' },
      { q: '¿Puedo asociar cualquier correo a mi Zelle?', a: 'Se recomienda usar el mismo correo electrónico registrado en tu base de datos del banco para evitar bloqueos preventivos por seguridad.' }
    ]
  },
  {
    slug: 'bancamiga-paypal',
    category: 'servicios',
    title: 'Asociar PayPal a Bancamiga para Retiro de Fondos | Guía Amiga',
    meta_description: 'Guía práctica para retirar saldo de PayPal en Venezuela directo a tu cuenta Bancamiga. Comisiones, tiempos de espera y pasos detallados.',
    h1: 'Retirar fondos de PayPal a Bancamiga',
    introduction: 'Descubre cómo asociar tu cuenta de PayPal con tu cuenta internacional de Bancamiga para retirar tus saldos y convertirlos a divisas locales o dólares en efectivo de forma legítima.',
    main_content: `
      <h2>Ventajas de la vinculación PayPal-Bancamiga</h2>
      <p>Esta alianza permite a los trabajadores independientes, comercios y freelancers en Venezuela disponer de sus fondos electrónicos con total seguridad.</p>
      <ul>
        <li><b>Conexión en línea:</b> El retiro se gestiona directamente desde la pestaña de PayPal en tu banca en línea Bancamiga.</li>
        <li><b>Moneda de cobro:</b> Los fondos son abonados a tu cuenta Cash o cuenta internacional de custodia.</li>
        <li><b>Tiempos de liquidación:</b> Los fondos suelen acreditarse en tu cuenta en un plazo estimado de 24 a 72 horas hábiles tras la confirmación de la transacción.</li>
      </ul>
    `,
    faqs: [
      { q: '¿Qué comisión cobra Bancamiga por retiros de PayPal?', a: 'PayPal y Bancamiga aplican una comisión porcentual por cada retiro, la cual es detallada de forma transparente antes de confirmar el movimiento en pantalla.' },
      { q: '¿La cuenta de PayPal debe estar a mi nombre?', a: 'Sí. Por razones de cumplimiento regulatorio y prevención de legitimación de capitales, la titularidad del perfil de PayPal y de la cuenta bancaria debe ser exactamente idéntica.' }
    ]
  },
  {
    slug: 'compra-divisas-bancamiga',
    category: 'servicios',
    title: 'Cómo Comprar Divisas en Bancamiga: Mesa de Cambio | Guía Amiga',
    meta_description: 'Guía paso a paso para la adquisición de dólares y euros en la mesa de cambio y menudeo de Bancamiga. Horarios, límites y comisiones del BCV.',
    h1: 'Compra de Divisas en Bancamiga',
    introduction: 'Obtén divisas extranjeras (Dólares o Euros) de manera legal y autorizada a través de la mesa de cambio de Bancamiga. Conoce los horarios habilitados y las pautas dictadas por el BCV.',
    main_content: `
      <h2>Módulos de Mesa de Cambio e Intervención</h2>
      <p>El banco dispone de múltiples vías para comprar divisas a la tasa oficial oficial del Banco Central de Venezuela:</p>
      <ul>
        <li><b>Mesa de Cambio:</b> Pensada para montos mayores y operaciones entre particulares mediadas por el banco.</li>
        <li><b>Menudeo Bancamiga:</b> Ideal para la compra inmediata de saldos menores directamente de las reservas autorizadas.</li>
        <li><b>Intervención Cambiaria:</b> Fondos inyectados por el BCV los cuales se compran en días específicos de la semana a tasas competitivas.</li>
      </ul>
    `,
    faqs: [
      { q: '¿En qué horarios puedo comprar divisas?', a: 'Por lo general, las solicitudes están activas de lunes a viernes durante los horarios bancarios establecidos por el BCV. Fuera de ese horario, las transacciones quedan programadas para el siguiente día hábil.' },
      { q: '¿Es seguro guardar divisas en la cuenta?', a: 'Sí, las cuentas en divisas de Bancamiga están respaldadas por las regulaciones bancarias nacionales y te permiten usar tu tarjeta de débito en comercios locales.' }
    ]
  },
  {
    slug: 'agencias-bancamiga',
    category: 'agencias',
    title: 'Agencias y Sucursales Bancamiga en Venezuela | Guía Amiga',
    meta_description: 'Directorio completo de oficinas comerciales y taquillas de Bancamiga a nivel nacional. Horarios de atención y números de soporte.',
    h1: 'Agencias Oficiales Bancamiga',
    introduction: 'Encuentra la oficina comercial de Bancamiga más cercana a tu domicilio. Consulta el listado de agencias principales, horarios y direcciones detalladas en todo el territorio nacional.',
    main_content: `
      <h2>Directorio de Atención Presencial</h2>
      <p>Bancamiga cuenta con una amplia red de agencias a nivel nacional para trámites que requieran atención física o retiro de efectivo.</p>
      <p>Usa los enlaces detallados de nuestro directorio para ubicar la agencia de tu estado con sus respectivas direcciones y horarios de atención al cliente.</p>
    `,
    faqs: [
      { q: '¿Cuál es el horario general de atención de las agencias?', a: 'La mayoría de las agencias atienden al público de lunes a viernes desde las 8:30 AM hasta las 3:30 PM, exceptuando feriados bancarios oficiales.' },
      { q: '¿Qué trámites requieren ir obligatoriamente a una agencia?', a: 'Apertura de cuentas con retiro de libreta/tarjeta física, retiro o depósito de divisas en efectivo por taquilla, y soporte técnico físico de puntos de venta.' }
    ]
  },
  {
    slug: 'bancamiga-mastercard',
    category: 'tarjetas',
    title: 'Tarjeta Mastercard Débito Bancamiga Internacional | Guía Amiga',
    meta_description: 'Características y beneficios de la tarjeta de débito internacional Mastercard de Bancamiga. Límites, comisiones y uso seguro.',
    h1: 'Tarjeta Débito Mastercard Bancamiga',
    introduction: 'La tarjeta de débito Mastercard de Bancamiga es una de las más versátiles de Venezuela, permitiendo realizar pagos locales en bolívares y consumos internacionales con cargo en divisas.',
    main_content: `
      <h2>Características Principales del Plástico</h2>
      <p>Esta tarjeta híbrida te permite gestionar tus finanzas diarias de forma cómoda:</p>
      <ul>
        <li><b>Tecnología Contactless:</b> Realiza pagos rápidos sin necesidad de insertar la tarjeta en puntos de venta compatibles.</li>
        <li><b>Pago Multimoneda:</b> Si tienes saldo en divisas, el punto de venta debita automáticamente el monto correspondiente calculando a la tasa oficial del día.</li>
        <li><b>Compras en Línea:</b> Utilízala para pagar suscripciones y comprar en portales de comercio electrónico que admitan Mastercard.</li>
      </ul>
    `,
    faqs: [
      { q: '¿Cómo activo las compras por internet de mi tarjeta?', a: 'Debes ingresar al portal de Bancamiga en Línea, buscar la opción de gestión de tarjetas y habilitar el candado de compras electrónicas de forma temporal o permanente.' },
      { q: '¿Puedo retirar divisas en cajeros automáticos del exterior?', a: 'Sí, la tarjeta de débito internacional de Bancamiga está habilitada para retiros en la red de cajeros automáticos Mastercard a nivel global.' }
    ]
  }
];

// PROGRAMMATIC GENERATION FOR THE OTHER PAGES TO COMPLETE 100+ HIGH VALUE ARTICLES

const generatedPages = [];

// Helper to generate rich contents
const generateParagraph = (topic, index) => {
  const templates = [
    `Para optimizar el uso de ${topic}, es fundamental comprender las regulaciones vigentes y las mejores prácticas de seguridad digital en Venezuela. Cada operación debe ser monitoreada para evitar accesos no autorizados.`,
    `La implementación tecnológica de ${topic} representa un avance significativo en la inclusión financiera de comercios y usuarios particulares. Permite realizar transacciones con mayor fluidez y confiabilidad técnica.`,
    `Al gestionar ${topic}, el usuario debe verificar siempre los canales de soporte autorizados para resolver incidencias técnicas. Nunca comparta sus credenciales con gestores o intermediarios no certificados por el banco.`,
    `La seguridad en torno a ${topic} reside principalmente en la prevención. Mantener sus dispositivos móviles libres de software malicioso y verificar la autenticidad de los dominios web es la primera línea de defensa.`,
    `El crecimiento de operaciones vinculadas con ${topic} en el territorio nacional ha generado la necesidad de educar constantemente a los usuarios sobre las metodologías de fraude más comunes.`
  ];
  return templates[index % templates.length];
};

// 1. GENERATE 30 AGENCIAS
const cities = [
  { name: 'Chacao', state: 'Miranda', address: 'Av. Francisco de Miranda, Centro Comercial Lido, Torre A, Planta Baja.', phone: '0212-9585611' },
  { name: 'Las Mercedes', state: 'Caracas', address: 'Calle California, Edificio Bancamiga, Las Mercedes.', phone: '0212-9010100' },
  { name: 'Sabana Grande', state: 'Caracas', address: 'Av. Casanova, Centro Comercial El Recreo, Nivel C2.', phone: '0212-7061211' },
  { name: 'Catia', state: 'Caracas', address: 'Av. España, Edificio Sucre, Planta Baja, Catia.', phone: '0212-8704512' },
  { name: 'La Candelaria', state: 'Caracas', address: 'Av. Urdaneta, Esq. de Candilito, Edificio Candilito, PB.', phone: '0212-5648899' },
  { name: 'Centro Financiero', state: 'Caracas', address: 'Esq. de Sociedad a Traposos, Av. Universidad, Edificio Bancamiga.', phone: '0212-5011111' },
  { name: 'IPSFA', state: 'Caracas', address: 'Av. Los Próceres, Centro Comercial IPSFA, Nivel PB, Sector Los Ilustres.', phone: '0212-6623344' },
  { name: 'Altamira', state: 'Miranda', address: 'Av. Luis Roche, entre 1ra y 2da Transversal, Altamira.', phone: '0212-2615599' },
  { name: 'Guarenas', state: 'Miranda', address: 'Av. Intercomunal Guarenas-Guatire, CC Oasis Center, Nivel Planta Baja.', phone: '0234-3621122' },
  { name: 'Charallave', state: 'Miranda', address: 'Av. Bolívar, Centro Comercial Matalinda, Local 4, Charallave.', phone: '0239-2485511' },
  { name: 'Los Teques', state: 'Miranda', address: 'Av. Bosta, Centro Comercial La Cascada, Nivel Planta Baja, Los Teques.', phone: '0212-3831122' },
  { name: 'Maracaibo Bella Vista', state: 'Zulia', address: 'Av. 4 (Bella Vista), con Calle 72, Edificio Bancamiga, Maracaibo.', phone: '0261-7935511' },
  { name: 'Maracaibo Delicias', state: 'Zulia', address: 'Av. 15 (Delicias), CC Las Delicias, Local 12, Maracaibo.', phone: '0261-7412233' },
  { name: 'Cabimas', state: 'Zulia', address: 'Av. Independencia, CC La Fuente, Local 8, Cabimas.', phone: '0264-2215599' },
  { name: 'Valencia Centro', state: 'Carabobo', address: 'Av. Bolívar Sur, CC Las Palmas, Local 3, Valencia.', phone: '0241-8356611' },
  { name: 'Valencia El Viñedo', state: 'Carabobo', address: 'Av. Bolívar Norte, CC El Viñedo, Planta Baja, Valencia.', phone: '0241-8253344' },
  { name: 'Puerto Cabello', state: 'Carabobo', address: 'Calle Plaza, Edificio Don Bosco, PB, Puerto Cabello.', phone: '0242-3619988' },
  { name: 'Barquisimeto Centro', state: 'Lara', address: 'Av. 20, entre Calles 25 y 26, Edificio Bancamiga, Barquisimeto.', phone: '0251-2314455' },
  { name: 'Barquisimeto Este', state: 'Lara', address: 'Av. Lara, CC Parque Real, Nivel PB, Barquisimeto.', phone: '0251-2551122' },
  { name: 'Maracay Centro', state: 'Aragua', address: 'Av. Bolívar Este, Multicentro Locatel, Planta Baja, Maracay.', phone: '0243-2321144' },
  { name: 'Cagua', state: 'Aragua', address: 'Calle Froilán Correa, CC Cagua, Nivel PB, Cagua.', phone: '0244-3958811' },
  { name: 'San Cristóbal', state: 'Táchira', address: 'Av. 19 de Abril, CC El Tamá, Planta Baja, San Cristóbal.', phone: '0276-3558811' },
  { name: 'Puerto Ordaz', state: 'Bolívar', address: 'Av. Las Américas, Torre Continental, Planta Baja, Puerto Ordaz.', phone: '0286-9231144' },
  { name: 'Ciudad Bolívar', state: 'Bolívar', address: 'Av. Jesús Soto, CC Tepuy, Local 5, Ciudad Bolívar.', phone: '0285-6321155' },
  { name: 'Puerto La Cruz', state: 'Anzoátegui', address: 'Av. Municipal, CC Puerto Plaza, Local PB, Puerto La Cruz.', phone: '0281-2673311' },
  { name: 'El Tigre', state: 'Anzoátegui', address: 'Av. Francisco de Miranda, CC Plaza España, PB, El Tigre.', phone: '0283-2358899' },
  { name: 'Barcelona', state: 'Anzoátegui', address: 'Av. Intercomunal Jorge Rodríguez, CC Camino Real, Barcelona.', phone: '0281-2864455' },
  { name: 'Maturín', state: 'Monagas', address: 'Av. Alirio Ugarte Pelayo, CC Monagas Plaza, Nivel PB, Maturín.', phone: '0291-6435566' },
  { name: 'Mérida Centro', state: 'Mérida', address: 'Av. 3 Independencia, entre Calles 22 y 23, Edificio Bancamiga, Mérida.', phone: '0274-2521144' },
  { name: 'Valera', state: 'Trujillo', address: 'Av. Bolívar, CC Plaza, Local PB-10, Valera.', phone: '0271-2213344' }
];

cities.forEach((city, idx) => {
  const slug = `agencia-bancamiga-${city.name.toLowerCase().replace(/\s+/g, '-')}`;
  generatedPages.push({
    slug,
    category: 'agencias',
    title: `Agencia Bancamiga ${city.name} (${city.state}) | Dirección y Horarios`,
    meta_description: `Ubicación detallada, dirección exacta, número de teléfono y horarios de atención de la agencia de Bancamiga en ${city.name}, estado ${city.state}.`,
    h1: `Agencia Bancamiga ${city.name}`,
    introduction: `Si necesitas realizar operaciones físicas como retiro de efectivo en taquilla, depósitos o solicitar soporte para tu punto de venta, te ofrecemos los detalles de la sucursal de Bancamiga en <strong>${city.name}</strong>.`,
    main_content: `
      <h2>Dirección y Datos de Contacto</h2>
      <p>La sucursal se encuentra ubicada en una zona de fácil acceso y cuenta con los siguientes datos de identificación oficiales:</p>
      <table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 15px;">
        <tr style="border-bottom: 1px solid var(--border-light); background: rgba(255,255,255,0.02)">
          <td style="padding: 12px; font-weight: bold; width: 30%">Estado</td>
          <td style="padding: 12px;">${city.state}</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border-light);">
          <td style="padding: 12px; font-weight: bold;">Dirección Exacta</td>
          <td style="padding: 12px;">${city.address}</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border-light); background: rgba(255,255,255,0.02)">
          <td style="padding: 12px; font-weight: bold;">Teléfono Directo</td>
          <td style="padding: 12px;">${city.phone}</td>
        </tr>
        <tr style="border-bottom: 1px solid var(--border-light);">
          <td style="padding: 12px; font-weight: bold;">Horario de Atención</td>
          <td style="padding: 12px;">Lunes a Viernes de 8:30 AM a 3:30 PM (excepto feriados bancarios).</td>
        </tr>
      </table>

      <h2>Servicios Disponibles en Taquilla</h2>
      <p>${generateParagraph(`la agencia ${city.name}`, idx)} En esta oficina comercial podrás gestionar una amplia gama de trámites financieros:</p>
      <ul>
        <li>Apertura y reactivación de cuentas de ahorro, corriente y cuentas en divisas extranjeras.</li>
        <li>Depósito y retiro de dólares y euros en efectivo a través del servicio de Cuenta Cash.</li>
        <li>Asesoría y entrega de tarjetas de débito internacionales Mastercard Contactless.</li>
        <li>Recepción de requerimientos y soporte técnico especializado para comercios afiliados a puntos de venta Bancamiga.</li>
      </ul>

      <h2>Recomendaciones de Seguridad al Visitar la Oficina</h2>
      <p>La seguridad digital y física van de la mano. Sigue estas sugerencias durante tu visita presencial:</p>
      <ul>
        <li>Nunca aceptes la ayuda de intermediarios o personas ajenas a la institución bancaria en el área de taquillas o cajeros automáticos.</li>
        <li>Verifica que tus transacciones con efectivo en taquilla queden registradas debidamente en tu recibo impreso.</li>
        <li>Si retiras divisas o bolívares en efectivo, planifica tu salida del banco de forma discreta y segura.</li>
      </ul>
    `,
    faqs: [
      { q: `¿Es obligatorio solicitar cita para ir a la agencia de ${city.name}?`, a: 'No, la atención al público en las oficinas comerciales de Bancamiga se realiza por orden de llegada durante los horarios normales de oficina.' },
      { q: `¿Puedo cambiar el chip de mi tarjeta de débito en esta oficina?`, a: 'Sí, la reposición de plásticos por daño o pérdida se realiza directamente en taquilla con entrega inmediata según disponibilidad de inventario.' }
    ]
  });
});

// 2. GENERATE 15 PUNTOS DE VENTA (POS)
const posModels = [
  { model: 'AMP 3000', specs: 'Conexión SIM 3G/4G, teclado físico, batería de alta duración y lector de banda magnética/chip.' },
  { model: 'AMP 7000', specs: 'Pantalla a color, conectividad Dual (Wi-Fi + SIM), impresora térmica integrada y tecnología NFC Contactless.' },
  { model: 'AMP 8000', specs: 'Sistema operativo Android, pantalla táctil, impresora integrada, conectividad 4G LTE y Wi-Fi con reportes interactivos.' },
  { model: 'Q2', specs: 'Punto de venta de bolsillo ultra-portátil, ideal para delivery y profesionales independientes con conexión Bluetooth y 4G.' },
  { model: 'AMP 9000', specs: 'Terminal inteligente de alta gama con firma digital en pantalla, Android y batería optimizada para uso continuo.' }
];

const posTopics = [
  { slug: 'solicitud-punto-de-venta-personas', title: 'Solicitar Punto de Venta Bancamiga: Personas Naturales', key: 'requisitos de personas' },
  { slug: 'solicitud-punto-de-venta-empresas', title: 'Requisitos de Punto de Venta para Empresas y Firmas Personales', key: 'requisitos jurídicos' },
  { slug: 'cierre-de-lote-punto-de-venta', title: 'Cómo Hacer Cierre de Lote en Punto de Venta Bancamiga', key: 'cierre de lote diario' },
  { slug: 'actualizar-aplicacion-punto-de-venta', title: 'Cómo Actualizar la Aplicación de tu POS Bancamiga', key: 'actualización de software' },
  { slug: 'solucionar-error-conexion-pos', title: 'Solución a Errores de Conexión en Puntos de Venta', key: 'error de conexión' },
  { slug: 'comisiones-tarifas-punto-de-venta', title: 'Comisiones y Tarifas Oficiales de Puntos de Venta Bancamiga', key: 'comisiones y tarifas' },
  { slug: 'financiamiento-compra-plazos-pos', title: 'Financiamiento y Compra a Plazos de Equipos POS', key: 'financiamiento de equipos' },
  { slug: 'cobro-pago-movil-pos', title: 'Cómo Cobrar con Pago Móvil en tu Punto de Venta', key: 'pago móvil integrado' },
  { slug: 'reportar-punto-venta-danado-robado', title: 'Cómo Reportar un Punto de Venta por Falla o Robo', key: 'soporte de equipos' },
  { slug: 'beneficios-punto-venta-comercios', title: 'Ventajas de los Puntos de Venta Bancamiga para Negocios', key: 'beneficios comerciales' }
];

// Add 5 model specific pages + 10 topic pages = 15 pages
posModels.forEach((m, idx) => {
  generatedPages.push({
    slug: `punto-de-venta-bancamiga-${m.model.toLowerCase().replace(/\s+/g, '-')}`,
    category: 'puntos-de-venta',
    title: `Punto de Venta Bancamiga ${m.model}: Características y Guía`,
    meta_description: `Conoce las especificaciones técnicas, manual de configuración y beneficios del terminal de pago punto de venta Bancamiga modelo ${m.model}.`,
    h1: `Punto de Venta Bancamiga ${m.model}`,
    introduction: `El modelo <strong>${m.model}</strong> de Bancamiga es uno de los terminales de pago más vendidos en Venezuela. Te explicamos sus especificaciones, modo de uso y cómo adquirirlo.`,
    main_content: `
      <h2>Especificaciones Técnicas del Equipo</h2>
      <p>Este equipo está diseñado para soportar altos volúmenes de transacciones diarias con una respuesta ágil:</p>
      <ul>
        <li><b>Características:</b> ${m.specs}</li>
        <li><b>Métodos de pago admitidos:</b> Tarjetas de débito nacionales (Maestro), crédito internacionales (Mastercard, Visa) y pago móvil integrado.</li>
        <li><b>Batería y Energía:</b> Cargador tipo USB para facilitar la carga en cualquier entorno comercial.</li>
      </ul>

      <h2>Manual Básico de Operación</h2>
      <p>${generateParagraph(`el equipo POS ${m.model}`, idx)} Sigue estos pasos para la operación diaria de tu terminal:</p>
      <ol>
        <li><b>Encendido:</b> Presione el botón de encendido lateral o superior durante 3 segundos.</li>
        <li><b>Conexión:</b> Espere a que el ícono de red (Wi-Fi o cobertura de datos móviles) aparezca en verde en la parte superior de la pantalla.</li>
        <li><b>Venta:</b> Ingrese al menú principal, seleccione "Venta", digite el monto de la compra y presione confirmar para que el cliente pase su tarjeta.</li>
        <li><b>Cierre de Lote:</b> Se aconseja realizar un cierre de lote al finalizar la jornada laboral para asegurar la liquidación de los fondos.</li>
      </ol>

      <h2>Mantenimiento Preventivo</h2>
      <p>Evita fallas operativas cuidando tu equipo de la siguiente forma:</p>
      <ul>
        <li>Limpia suavemente los rodillos de la impresora de papel térmico para evitar atascos.</li>
        <li>No dejes que la batería se descargue por completo de forma recurrente, ya que reduce su vida útil útil.</li>
        <li>Evita retirar o cambiar la tarjeta SIM interna del equipo, ya que esto podría desconfigurar las credenciales de cifrado de seguridad.</li>
      </ul>
    `,
    faqs: [
      { q: `¿Cómo solicito el papel térmico para mi ${m.model}?`, a: 'Puedes adquirir rollos de repuesto compatibles en cualquier oficina comercial de Bancamiga o distribuidores autorizados de insumos de pago.' },
      { q: `¿El ${m.model} cuenta con garantía?`, a: 'Sí, todos los terminales nuevos adquiridos directamente con el banco cuentan con un período de garantía contra defectos de fabricación.' }
    ]
  });
});

posTopics.forEach((t, idx) => {
  generatedPages.push({
    slug: t.slug,
    category: 'puntos-de-venta',
    title: `${t.title} | Guía Completa`,
    meta_description: `Aprende todo sobre ${t.key} en Bancamiga. Requisitos, procesos digitales y recomendaciones de seguridad para comercios.`,
    h1: t.title,
    introduction: `La gestión adecuada del canal de cobro es crucial para la salud financiera de tu negocio. Analizamos en detalle todo sobre <strong>${t.key}</strong> de Bancamiga.`,
    main_content: `
      <h2>Aspectos Fundamentales de la Operación</h2>
      <p>${generateParagraph(t.key, idx)} Conocer los procedimientos técnicos del banco te evitará retrasos y cobros indebidos:</p>
      <ul>
        <li><b>Transparencia y Seguridad:</b> El banco procesa las liquidaciones de manera automática en las cuentas de los comercios afiliados según el esquema del BCV.</li>
        <li><b>Canales Digitales de Soporte:</b> Puedes verificar el estado de tus equipos y reportar transacciones fallidas ingresando al portal de afiliados.</li>
        <li><b>Actualización Continua:</b> Mantén el firmware de tu terminal al día para disfrutar de nuevas pasarelas de pago y parches de seguridad.</li>
      </ul>

      <h2>Guía Operativa Detallada</h2>
      <p>Sigue los manuales aprobados para evitar fallas administrativas en tu punto de venta:</p>
      <ul>
        <li>Realiza siempre una prueba de conexión antes de iniciar las ventas del día para comprobar la estabilidad de la señal telefónica.</li>
        <li>Compara el cierre de lote impreso con tu reporte digital de movimientos bancarios para llevar un control contable óptimo.</li>
        <li>En caso de fallas recurrentes de comunicación, intente cambiar el modo de conexión de datos móviles a Wi-Fi si el equipo lo permite.</li>
      </ul>
    `,
    faqs: [
      { q: `¿Dónde puedo consultar los manuales oficiales de soporte?`, a: 'Puedes acceder a ellos a través de la sección de soporte técnico comercial del portal web certificado de Bancamiga.' },
      { q: `¿Cuánto tiempo tarda la activación de un servicio nuevo?`, a: 'Las afiliaciones y actualizaciones de servicios en los terminales activos suelen procesarse en un plazo de 24 a 48 horas hábiles.' }
    ]
  });
});

// 3. GENERATE 15 CUENTAS BANCARIAS
const accountTopics = [
  { slug: 'cuenta-corriente-bancamiga', title: 'Cuenta Corriente Bancamiga: Beneficios y Requisitos', key: 'cuenta corriente' },
  { slug: 'cuenta-ahorro-bancamiga', title: 'Cuenta de Ahorro Bancamiga: Rendimiento y Apertura', key: 'cuenta de ahorros' },
  { slug: 'cuenta-simplificada-bancamiga', title: 'Cuenta Simplificada Bancamiga: Abre tu cuenta con cédula', key: 'cuenta express' },
  { slug: 'cuenta-divisas-dolares-euros', title: 'Cuenta en Divisas Bancamiga: Dólares y Euros en Venezuela', key: 'cuenta en divisas' },
  { slug: 'cuenta-cash-bancamiga-efectivo', title: 'Cuenta Cash Bancamiga: Depósito y Retiro de Divisas Físicas', key: 'cuenta cash' },
  { slug: 'requisitos-cuenta-personas-naturales', title: 'Requisitos para abrir Cuenta Bancaria: Personas Naturales', key: 'requisitos naturales' },
  { slug: 'requisitos-cuenta-personas-juridicas', title: 'Requisitos de Cuenta para Empresas y Compañías Anónimas', key: 'requisitos jurídicos' },
  { slug: 'requisitos-cuenta-firma-personal', title: 'Requisitos para abrir Cuenta como Firma Personal', key: 'firma personal' },
  { slug: 'abrir-cuenta-linea-bancamiga', title: 'Cómo abrir una Cuenta en Línea en Bancamiga', key: 'apertura en línea' },
  { slug: 'cuenta-ahorro-programado', title: 'Cuenta de Ahorro Programado: Planifica tus Finanzas', key: 'ahorro programado' },
  { slug: 'cuenta-bancamiga-kids', title: 'Cuentas para Menores de Edad: Bancamiga Kids', key: 'cuenta infantil' },
  { slug: 'como-consultar-saldo-bancamiga', title: 'Cómo consultar saldo de cuenta Bancamiga: Web, App y SMS', key: 'consulta de saldo' },
  { slug: 'solicitar-referencia-bancaria-linea', title: 'Cómo solicitar referencias bancarias en línea sin ir a la agencia', key: 'referencias bancarias' },
  { slug: 'solicitar-estado-cuenta-bancamiga', title: 'Cómo descargar tus estados de cuenta de Bancamiga', key: 'estados de cuenta' },
  { slug: 'mantenimiento-comisiones-cuentas-bancarias', title: 'Comisiones de mantenimiento y transacciones de cuentas', key: 'comisiones de cuenta' }
];

accountTopics.forEach((t, idx) => {
  generatedPages.push({
    slug: t.slug,
    category: 'cuentas',
    title: `${t.title} | Guía Bancaria`,
    meta_description: `Toda la información sobre ${t.key} en Bancamiga. Requisitos, ventajas financieras, comisiones oficiales y pasos de apertura.`,
    h1: t.title,
    introduction: `Conoce las ventajas competitivas de usar la plataforma financiera de Bancamiga. Te explicamos los detalles, procesos de apertura y mantenimiento de la <strong>${t.key}</strong>.`,
    main_content: `
      <h2>Características y Beneficios del Producto</h2>
      <p>${generateParagraph(t.key, idx)} Abrir este tipo de producto te brinda acceso a herramientas de cobro avanzadas:</p>
      <ul>
        <li><b>Flexibilidad:</b> Moviliza tus fondos las 24 horas del día a través de la aplicación móvil y la banca web.</li>
        <li><b>Interconexión:</b> Envía y recibe transferencias de otros bancos y pago móvil al instante.</li>
        <li><b>Soporte Legal:</b> Productos respaldados por las normativas de la Superintendencia de las Instituciones del Sector Bancario (SUDEBAN).</li>
      </ul>

      <h2>Pasos de Solicitud y Recaudos</h2>
      <p>Para agilizar tu trámite de apertura, asegúrate de organizar los recaudos requeridos por la institución:</p>
      <ul>
        <li>Cédula de Identidad laminada y vigente del titular.</li>
        <li>Registro de Información Fiscal (RIF) actualizado con dirección de domicilio física.</li>
        <li>Una referencia personal y una referencia bancaria de otra institución (si posee).</li>
        <li>Constancia de trabajo o certificación de ingresos visada (para trabajadores independientes).</li>
      </ul>
    `,
    faqs: [
      { q: `¿Cuánto es el monto mínimo de apertura para la ${t.key}?`, a: 'Bancamiga permite la apertura de la mayoría de sus productos de cuentas sin requerir un saldo mínimo inicial de depósito.' },
      { q: `¿Puedo movilizar esta cuenta desde el extranjero?`, a: 'Sí, puedes acceder al portal web oficial y realizar transferencias usando tus métodos de autenticación móvil activos.' }
    ]
  });
});

// 4. GENERATE 15 TARJETAS Y MEDIOS DE PAGO
const cardTopics = [
  { slug: 'tarjeta-debito-internacional-mastercard', title: 'Tarjeta de Débito Mastercard Internacional Bancamiga', key: 'debito mastercard' },
  { slug: 'tarjeta-prepago-internacional-compras-online', title: 'Tarjeta Prepago Internacional para compras por Internet', key: 'prepago internacional' },
  { slug: 'tarjeta-debito-divisas-pagos-venezuela', title: 'Tarjeta de Débito en Divisas: Paga en comercios nacionales', key: 'débito en divisas' },
  { slug: 'tarjeta-credito-solicitud-aumento-limite', title: 'Tarjeta de Crédito Bancamiga: Solicitud y Aumento de Límite', key: 'tarjeta de crédito' },
  { slug: 'activar-tarjeta-debito-bancamiga-internet', title: 'Cómo activar tu Tarjeta de Débito Bancamiga por Internet', key: 'activación de tarjeta' },
  { slug: 'bloquear-tarjeta-debito-robo-perdida', title: 'Cómo bloquear tu tarjeta de débito por robo, hurto o extravío', key: 'bloqueo de tarjeta' },
  { slug: 'cambiar-pin-tarjeta-cajero-automatico', title: 'Cómo cambiar la clave o PIN de tu tarjeta de débito', key: 'cambio de PIN' },
  { slug: 'limites-retiro-cajeros-automaticos', title: 'Límites de Retiro diario en cajeros automáticos Bancamiga', key: 'límites de cajeros' },
  { slug: 'tarjeta-debito-digital-generacion-uso', title: 'Tarjeta de Débito Digital: Cómo generarla y comprar', key: 'tarjeta digital' },
  { slug: 'reposicion-tarjeta-costos-agencias', title: 'Reposición de Tarjeta física: Costos y retiro en agencias', key: 'reposición de plástico' },
  { slug: 'tarjeta-credito-corporativa-empresas', title: 'Tarjeta de Crédito Corporativa: Solución para empresas', key: 'tarjeta corporativa' },
  { slug: 'programa-puntos-lealtad-tarjetas', title: 'Programa de Lealtad y Acumulación de Puntos Bancamiga', key: 'puntos de lealtad' },
  { slug: 'usar-tarjeta-bancamiga-exterior-viajes', title: 'Cómo usar tu Tarjeta de Débito internacional de viaje fuera de Venezuela', key: 'uso en el exterior' },
  { slug: 'tarjeta-prepago-euros-compras-europa', title: 'Tarjeta Prepago en Euros: Compras y consumos en Europa', key: 'tarjeta en euros' },
  { slug: 'solucion-tarjeta-declinada-puntos-venta', title: 'Qué hacer ante el error de tarjeta declinada en puntos de venta', key: 'tarjeta declinada' }
];

cardTopics.forEach((t, idx) => {
  generatedPages.push({
    slug: t.slug,
    category: 'tarjetas',
    title: `${t.title} | Guía de Tarjetas`,
    meta_description: `Descubre cómo gestionar tu ${t.key} de Bancamiga. Requisitos de solicitud, activación, tarifas oficiales y seguridad contra clonación.`,
    h1: t.title,
    introduction: `La seguridad y eficiencia de tus pagos con tarjeta es fundamental. Analizamos las condiciones de uso, comisiones y configuraciones de seguridad de la <strong>${t.key}</strong> de Bancamiga.`,
    main_content: `
      <h2>Recomendaciones de Uso y Gestión</h2>
      <p>${generateParagraph(t.key, idx)} Conoce los aspectos básicos para proteger el chip de tu tarjeta:</p>
      <ul>
        <li><b>Límites de Consumo:</b> Los límites diarios de compra en puntos de venta son configurables y se ajustan al saldo de tu cuenta asociada.</li>
        <li><b>Uso Seguro de Claves:</b> Cambia periódicamente el PIN de 4 dígitos de tu tarjeta en cajeros automáticos oficiales. Evite usar fechas de nacimiento o secuencias numéricas sencillas.</li>
        <li><b>Bloqueo en línea:</b> Ante cualquier sospecha de cargos no reconocidos, utiliza el bloqueo preventivo temporal desde el menú digital.</li>
      </ul>

      <h2>Guía de Configuración Rápida</h2>
      <p>Sigue estas instrucciones para activar y parametrizar tus medios de pago físico:</p>
      <ol>
        <li>Ingrese al portal con su usuario y contraseña secreta.</li>
        <li>Seleccione la sección de <b>Gestión de Tarjetas</b> y busque su plástico activo.</li>
        <li>Habilite la opción de compras electrónicas nacionales o internacionales según sus necesidades.</li>
        <li>Establezca los montos máximos diarios permitidos por operación para mitigar riesgos en caso de pérdida.</li>
      </ol>
    `,
    faqs: [
      { q: `¿Qué comisiones aplican por retiros en cajeros de otros bancos?`, a: 'Los retiros de efectivo en cajeros de otros bancos nacionales aplican una pequeña comisión porcentual fijada por el Banco Central de Venezuela.' },
      { q: `¿Qué vigencia tienen las tarjetas internacionales de Bancamiga?`, a: 'La fecha de vencimiento viene troquelada en la parte frontal del plástico y suele ser de 3 a 5 años desde su emisión.' }
    ]
  });
});

// 5. GENERATE 15 SERVICIOS Y OPERACIONES DIGITALES
const servicesTopics = [
  { slug: 'bancamiga-suite-app-movil-guia', title: 'Bancamiga Suite: Guía completa de la App Móvil Oficial', key: 'Bancamiga Suite' },
  { slug: 'pago-movil-bancamiga-limites-registro', title: 'Pago Móvil Bancamiga: Cómo registrarse, afiliarse y enviar dinero', key: 'Pago Móvil' },
  { slug: 'recibir-pago-movil-datos-correctos', title: 'Cómo recibir Pago Móvil en Bancamiga de forma rápida', key: 'Recibir Pago Móvil' },
  { slug: 'comprar-dolares-mesa-cambio-pasos', title: 'Cómo comprar dólares en la Mesa de Cambio de Bancamiga', key: 'Mesa de Cambio' },
  { slug: 'compra-divisas-menudeo-bancamiga', title: 'Compra de divisas al Menudeo en Bancamiga: Paso a Paso', key: 'Menudeo de Divisas' },
  { slug: 'pago-servicios-cantv-bancamiga-linea', title: 'Cómo pagar CANTV en Bancamiga en Línea', key: 'pago de CANTV' },
  { slug: 'pago-corpoelec-electricidad-bancamiga', title: 'Cómo pagar factura de Corpoelec en Bancamiga', key: 'pago de Corpoelec' },
  { slug: 'recarga-digitel-saldo-bolsa-datos', title: 'Cómo recargar Digitel en línea con Bancamiga', key: 'recarga de Digitel' },
  { slug: 'recarga-movistar-prepago-pospago-bancamiga', title: 'Cómo recargar Movistar en Bancamiga: Móvil y Datos', key: 'recarga de Movistar' },
  { slug: 'recarga-simpletv-television-suscripcion', title: 'Cómo recargar SimpleTV en línea con Bancamiga', key: 'recarga de SimpleTV' },
  { slug: 'pago-impuestos-seniat-bancamiga-linea', title: 'Cómo declarar y pagar Impuestos SENIAT con Bancamiga', key: 'pago del SENIAT' },
  { slug: 'pago-patentes-alcaldias-municipios', title: 'Pago de Patente de Comercio y Alcaldías en Bancamiga', key: 'pago de patentes' },
  { slug: 'api-bancamiga-pasarela-pago-ecommerce', title: 'API Bancamiga para pasarelas de pago de comercio electrónico', key: 'API Bancamiga' },
  { slug: 'recibir-remesas-internacionales-bancamiga', title: 'Cómo recibir remesas internacionales en tu cuenta Bancamiga', key: 'Remesas Bancamiga' },
  { slug: 'transferencias-inmediatas-interbancarias', title: 'Cómo enviar transferencias inmediatas a otros bancos', key: 'transferencias al instante' }
];

servicesTopics.forEach((t, idx) => {
  generatedPages.push({
    slug: t.slug,
    category: 'servicios',
    title: `${t.title} | Guía de Servicios`,
    meta_description: `Aprende cómo usar ${t.key} de Bancamiga de forma segura. Pasos, comisiones oficiales, límites de uso y solución a problemas frecuentes.`,
    h1: t.title,
    introduction: `La banca digital de Bancamiga simplifica tus pagos diarios y operaciones comerciales en Venezuela. Conoce el funcionamiento detallado de <strong>${t.key}</strong>.`,
    main_content: `
      <h2>Guía Operativa del Servicio</h2>
      <p>${generateParagraph(t.key, idx)} Asegura tus transacciones digitales conociendo los límites de uso diario del canal:</p>
      <ul>
        <li><b>Comodidad:</b> Realiza tus operaciones sin necesidad de salir de casa o desde tu dispositivo móvil preferido.</li>
        <li><b>Comisiones BCV:</b> Los cargos aplicados por concepto de transacciones y recargas de saldo se ajustan estrictamente a los tabuladores del BCV.</li>
        <li><b>Validación:</b> Verifica siempre los datos de destino (RIF, Cédula, Teléfono) antes de confirmar cualquier movimiento monetario.</li>
      </ul>

      <h2>Manual paso a paso para usuarios</h2>
      <p>Sigue las siguientes instrucciones para configurar tu servicio de manera correcta:</p>
      <ol>
        <li>Ingrese al portal web o la aplicación móvil <b>Bancamiga Suite</b>.</li>
        <li>Navegue al menú de pagos e identifique la opción correspondiente a ${t.key}.</li>
        <li>Complete el formulario con los datos de cobro, números de contrato o montos correspondientes.</li>
        <li>Confirme la transacción ingresando el código OTP dinámico enviado a su teléfono móvil registrado.</li>
        <li>Guarde la captura de pantalla o comprobante de pago para cualquier aclaratoria con el proveedor del servicio.</li>
      </ol>
    `,
    faqs: [
      { q: `¿Qué ocurre si una transacción de ${t.key} falla pero me debitan el saldo?`, a: 'En caso de conciliación fallida, el banco suele reintegrar el saldo retenido en un lapso de 24 a 48 horas tras evaluar la transacción.' },
      { q: `¿Los límites de ${t.key} varían según la tasa del dólar?`, a: 'Sí, algunos límites transaccionales se ajustan de manera automática en bolívares basándose en las variaciones de la Unidad Tributaria o tasas del BCV.' }
    ]
  });
});

// 6. GENERATE 15 SEGURIDAD Y PREVENCIÓN DE ESTAFAS
const securityTopics = [
  { slug: 'phishing-reconocer-paginas-falsas-bancamiga', title: 'Qué es el Phishing y cómo reconocer páginas falsas de Bancamiga', key: 'phishing bancario' },
  { slug: 'verificar-certificado-ssl-candado-seguridad', title: 'Cómo verificar el certificado SSL y el candado de tu banco', key: 'certificado SSL' },
  { slug: 'estafas-whatsapp-proteger-cuenta-banca', title: 'Estafas por WhatsApp: Evita que secuestren tus claves bancarias', key: 'estafas de WhatsApp' },
  { slug: 'estafas-sms-smishing-falsos-bloqueos-cuentas', title: 'Alertas de falsos bloqueos de cuenta: Estafas por SMS (Smishing)', key: 'smishing bancario' },
  { slug: 'seguridad-redes-wifi-publicas-banca-linea', title: 'Seguridad en Redes Wi-Fi públicas para ingresar a Bancamiga', key: 'redes Wi-Fi públicas' },
  { slug: 'configurar-verificacion-dos-pasos-2fa-suite', title: 'Cómo configurar la verificación en dos pasos (2FA) en tu móvil', key: 'verificación en dos pasos' },
  { slug: 'perder-celular-pago-movil-app-banco', title: 'Qué hacer si extravías tu celular afiliado a tu Pago Móvil', key: 'pérdida de celular' },
  { slug: 'crear-contrasenas-seguras-banca-internet', title: 'Cómo crear contraseñas seguras y memorables para Bancamiga', key: 'contraseñas seguras' },
  { slug: 'fraude-soporte-telefonico-falsas-llamadas-banco', title: 'Falsas llamadas del banco: Fraude de soporte telefónico', key: 'fraude telefónico' },
  { slug: 'reportar-pagina-web-sospechosa-phishing', title: 'Cómo denunciar y reportar una página web falsa de phishing', key: 'denuncia de phishing' },
  { slug: 'medidas-seguridad-retirar-efectivo-cajeros', title: 'Medidas de seguridad al retirar bolívares o divisas en cajeros', key: 'seguridad en cajeros' },
  { slug: 'seguridad-punto-venta-evita-cambiar-sim', title: 'Seguridad en Puntos de Venta: Evita alterar el hardware', key: 'seguridad de POS' },
  { slug: 'virus-troyanos-bancarios-limpiar-dispositivo', title: 'Cómo detectar y limpiar virus troyanos en tu computadora o móvil', key: 'troyanos bancarios' },
  { slug: 'guia-navegacion-segura-personas-mayores', title: 'Guía de navegación segura en internet para personas de la tercera edad', key: 'seguridad para adultos mayores' },
  { slug: 'canales-oficiales-contacto-bancamiga', title: 'Canales oficiales de comunicación y soporte de Bancamiga', key: 'canales certificados del banco' }
];

securityTopics.forEach((t, idx) => {
  generatedPages.push({
    slug: t.slug,
    category: 'seguridad',
    title: `${t.title} | Guía de Seguridad`,
    meta_description: `Toda la información sobre ${t.key}. Protege tus claves de acceso, cuentas y tarjetas de fraudes cibernéticos en Venezuela.`,
    h1: t.title,
    introduction: `La seguridad de tus activos digitales bancarios depende en gran medida de tu prevención y conocimiento sobre ciberseguridad. Analizamos en detalle todo sobre <strong>${t.key}</strong>.`,
    main_content: `
      <h2>Metodología de Prevención de Fraudes</h2>
      <p>${generateParagraph(t.key, idx)} Recuerde siempre las reglas inquebrantables de la banca segura:</p>
      <ul>
        <li><b>El banco nunca llama a pedir claves:</b> Ningún operador legítimo de Bancamiga te solicitará tu clave digital, contraseña completa, clave OTP o el código SMS de verificación.</li>
        <li><b>Verifica los remitentes:</b> Desconfía de correos electrónicos con dominios genéricos (Gmail, Outlook) o con variaciones extrañas del nombre del banco.</li>
        <li><b>Ingreso Manual:</b> Nunca entres a la banca web haciendo clic en enlaces que te envíen por chat, correo electrónico o mensajería de texto. Escriba la dirección directamente.</li>
      </ul>

      <h2>Qué hacer ante una sospecha de hackeo</h2>
      <p>Si cree que sus credenciales han sido comprometidas, actúe de inmediato siguiendo estos pasos:</p>
      <ol>
        <li>Ingrese rápidamente a su portal digital de Bancamiga en Línea (si aún tiene acceso) y proceda a cambiar sus contraseñas.</li>
        <li>Comuníquese de inmediato con los canales de soporte del banco para solicitar el bloqueo preventivo de sus cuentas.</li>
        <li>Denuncie las direcciones web falsas o números telefónicos estafadores a las autoridades correspondientes.</li>
      </ol>
    `,
    faqs: [
      { q: `¿Qué es el código dinámico OTP?`, a: 'Es un código numérico temporal enviado por el banco que sirve como segundo factor de autenticación para autorizar movimientos bancarios de manera segura.' },
      { q: `¿Dónde denuncio un fraude electrónico en Venezuela?`, a: 'Puedes reportar fraudes cibernéticos directamente ante la División de Delitos Informáticos del CICPC o llamando a las líneas autorizadas de atención de Bancamiga.' }
    ]
  });
});

module.exports = {
  categories,
  pages: [...corePages, ...generatedPages]
};
