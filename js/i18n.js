/**
 * Yummizi - Centralized Translation Engine (i18n)
 * Default Language: Spanish ('es')
 * Supports: Spanish ('es') & English ('en')
 */

const YUMMIZI_TRANSLATIONS = {
  es: {
    // Header & Navigation
    nav_logo_alt: "Logotipo de Yummizi",
    nav_for_restaurants: "Para Restaurantes",
    nav_for_diners: "Para Comensales",
    nav_home: "Inicio",
    nav_lang_es: "ES",
    nav_lang_en: "EN",
    nav_lang_toggle_aria: "Cambiar idioma (Español / Inglés)",

    // SEO Meta (Index)
    seo_title: "Yummizi | Zero Time Dining - Reserva de mesa y pedidos sin espera",
    seo_description: "Yummizi transforma la experiencia gastronómica: colas virtuales, confirmación de platos antes de llegar y cero esperas para comensales y restaurantes.",
    seo_h1: "Yummizi: Zero Time Dining - La revolución en reservas y pedidos anticipados",

    // Hero Section (Index)
    hero_title: "Yummizi es",
    hero_scene_1_top: "3<br />Rompiendo la clásica combinación de hambre y espera",
    hero_scene_1_bottom: "Dentro de los restaurantes",
    hero_scene_2_top: "2<br />Una oportunidad para un restaurante",
    hero_scene_2_bottom: "Una oportunidad tecnológica",
    hero_scene_3_top: "1<br />Un alivio para los comensales",
    hero_scene_3_bottom: "Incluso antes de llegar al restaurante",
    hero_scene_4: "Una experiencia rápida, fácil y deliciosa 😌",

    // Comparison Section
    comparison_title: "Descubre el camino Yummizi",
    comparison_before_badge: "Antes...",
    comparison_after_badge: "Con Yummizi...",
    comp_row_1_before: "Los comensales solían esperar tener mesa disponible en el restaurante deseado",
    comp_row_1_after: "Los comensales confirman su mesa y platillos incluso antes de llegar",
    comp_row_2_before: "Los restaurantes esperaban a que el cliente llegara para comenzar a cocinar",
    comp_row_2_after: "El restaurante prepara la comida a tiempo: mantiene calidad y fideliza clientes",
    comp_row_3_before: "Las filas de espera eran impredecibles para los comensales",
    comp_row_3_after: "El comensal se une a colas virtuales y el restaurante las gestiona con control total",
    comp_row_4_before: "Los clientes esperaban hambrientos en la mesa. ¿Normalizado, verdad?",
    comp_row_4_after: "Los comensales esperan mucho menos tiempo o simplemente no esperan por su comida",
    comp_row_5_before: "El tiempo perdido inicial pasaba factura a los nuevos clientes",
    comp_row_5_after: "Los comensales no viven una experiencia apresurada, sino una altamente eficiente",

    // Benefits Section
    benefits_title: "Descubre Nuestros Beneficios",
    card_1_resto_badge: "Beneficio Restaurante",
    card_1_resto_title: "Un flujo de usuarios mucho más predecible",
    card_1_diner_badge: "Experiencia Comensal",
    card_1_diner_title: "Los comensales pueden hacer más de una fila virtual simultáneamente",
    
    card_2_resto_badge: "Beneficio Restaurante",
    card_2_resto_title: "La rotación de mesas se incrementa a diario",
    card_2_diner_badge: "Experiencia Comensal",
    card_2_diner_title: "Los comensales esperan mucho menos por sus platos al llegar al restaurante",

    card_3_resto_badge: "Beneficio Restaurante",
    card_3_resto_title: "Registro ordenado del servicio y análisis visual de datos",
    card_3_diner_badge: "Experiencia Comensal",
    card_3_diner_title: "Disponibilidad de platillos consultable en tiempo real",

    card_4_resto_badge: "Beneficio Restaurante",
    card_4_resto_title: "Mayor probabilidad de que los clientes regresen con frecuencia",
    card_4_diner_badge: "Experiencia Comensal",
    card_4_diner_title: "Notificación anticipada de preferencias o especificaciones de cocina",

    // Waitlist Modal
    modal_title: "Mantente listo para el <span class=\"font-bold\">lanzamiento</span>",
    modal_subtitle: "Asegura tu lugar",
    form_name_placeholder: "Tu Nombre *",
    form_type_default: "¿Para quién es esto? *",
    form_type_diner: "Soy un Comensal",
    form_type_resto: "Soy un Restaurante",
    form_resto_placeholder: "Nombre Oficial del Restaurante *",
    form_email_placeholder: "Correo Electrónico *",
    form_question_placeholder: "¿Alguna duda o pregunta para nosotros?",
    form_submit_btn: "¡MANTÉNGANME AL TANTO!",
    form_policy_agreement: "He leído y acepto la <a href=\"#\" id=\"privacy-policy-link\" class=\"text-[#ff751f] hover:text-[#ff6105] underline font-bold\">Política de Privacidad</a> y autorizo ser contactado sobre la lista de espera.",
    form_policy_error: "Debes marcar la casilla para poder continuar",

    // Privacy Policy
    privacy_title: "Política de Privacidad de Yummizi",
    privacy_back_btn: "VOLVER",
    privacy_controller_title: "Identidad del Responsable del Tratamiento",
    privacy_controller_p: "El responsable del tratamiento de tus datos personales es Piero Stephano Olivas Tuesta, en representación del proyecto Yummizi (en proceso de constitución), con sede en Lima, Perú.",
    privacy_purpose_title: "Finalidad de la Recopilación de Datos",
    privacy_purpose_p: "Los datos solicitados a través de nuestro formulario (Nombre, Correo y Nombre del Restaurante) se usarán para registrar tu interés en el lanzamiento oficial de Yummizi, enviarte actualizaciones técnicas y comerciales directas, y contactarte para fases beta y estudios de mercado.",
    privacy_retention_title: "Almacenamiento y Periodo de Conservación",
    privacy_retention_p: "Tus datos se almacenarán en una base digital segura denominada 'Yummizi LP' por un plazo de 2 años o hasta que revoques formalmente tu consentimiento.",
    privacy_transfers_title: "Transferencias Internacionales de Datos",
    privacy_transfers_p: "Utilizamos infraestructura tecnológica de terceros de clase mundial (Netlify y Supabase). Tus datos se almacenan en servidores con altos estándares de seguridad internacional.",
    privacy_rights_title: "Derechos ARCO",
    privacy_rights_p: "Conforme a los estándares internacionales y la Ley N° 29733 de Perú, puedes ejercer tus derechos de Acceso, Rectificación, Cancelación u Oposición escribiendo a yummizi.mkt@gmail.com con el asunto 'Solicitud de Derechos de Privacidad'.",
    privacy_mandatory_title: "Naturaleza de la Información",
    privacy_mandatory_p: "Proporcionar los datos solicitados es necesario para incorporarte a nuestra lista de acceso anticipado.",

    // Footer
    footer_text: "Yummi yummi",

    // Restaurants Page (restaurants.html)
    resto_page_title: "Yummizi para Restaurantes | Maximiza la rotación y eficiencia de tu cocina",
    resto_page_desc: "Optimiza los tiempos de preparación, gestiona colas virtuales en tiempo real y aumenta tus ingresos con la tecnología Zero Time Dining de Yummizi.",
    resto_hero_badge: "Tecnología FoodTech B2B",
    resto_hero_phrase: "Optimiza tu cocina, multiplica la rotación de tus mesas y deleita a tus clientes.",
    resto_hero_sub: "Yummizi conecta a los comensales antes de su llegada para que tu cocina prepare pedidos con exactitud milimétrica. Cero mesas ociosas, máxima satisfacción.",
    resto_cta_button: "Unirse como Restaurante Aliado",
    resto_cta_note: "Integración rápida sin hardware complejo. Abre en nueva pestaña.",
    resto_app_badge: "Interfaz del Restaurante",
    resto_app_title: "Tecnología diseñada para el ritmo real de tu negocio",
    resto_app_desc: "Tres vistas sincronizadas para coordinar el salón, la cocina y la gerencia en tiempo real.",
    resto_img_1_badge: "Pantalla de Cocina",
    resto_img_1_title: "1. Comandas Anticipadas en Cocina",
    resto_img_1_desc: "Visualización ordenada de comandas programadas antes de que el cliente tome asiento en sala.",
    resto_img_2_badge: "Control de Sala",
    resto_img_2_title: "2. Gestor Inteligente de Colas Virtuales",
    resto_img_2_desc: "Asignación dinámica de turnos, confirmación de asistencia y fin de aglomeraciones en puerta.",
    resto_img_3_badge: "Gerencia & KPI",
    resto_img_3_title: "3. Analítica de Rotación y Tiempos",
    resto_img_3_desc: "Métricas visuales de horas pico, platillos de mayor rendimiento y tiempos de servicio.",
    resto_list_badge: "Impacto Comprobado",
    resto_list_title: "Lo que ganas integrando Yummizi en tu restaurante",
    resto_bullet_1: "Hasta 35% más rotación de mesas durante los turnos de mayor afluencia.",
    resto_bullet_2: "Preparación de platillos predecible y sincronizada con la llegada del cliente.",
    resto_bullet_3: "Disminución radical de clientes que se van por filas desorganizadas en puerta.",
    resto_bullet_4: "Menú digital sincronizado con disponibilidad de insumos en tiempo real.",
    resto_bullet_5: "Datos operativos claros para reducir mermas y potenciar tu rentabilidad.",
    resto_video_badge: "Demostración en Video",
    resto_video_title: "Mira a Yummizi en acción dentro de un restaurante",
    resto_video_sub: "Descubre en menos de 2 minutos cómo la tecnología Zero Time Dining transforma un servicio tradicional.",

    // Diners Page (diners.html)
    diner_page_title: "Yummizi para Comensales | Cero tiempo de espera para comer delicioso",
    diner_page_desc: "Pide tus platillos y confirma tu mesa antes de llegar al restaurante. Dile adiós a las filas con Yummizi.",
    diner_hero_badge: "Experiencia Comensal",
    diner_hero_phrase: "Llega, siéntate y disfruta: Tu comida lista en el momento exacto.",
    diner_hero_sub: "Nunca más mires el reloj mientras tienes hambre. Con Yummizi eliges tus platos favoritos antes de salir y tu mesa te espera lista para disfrutar.",
    diner_cta_button: "Descargar Yummizi para Comensales",
    diner_cta_note: "Disponible próximamente para iOS y Android. Abre en nueva pestaña.",
    diner_main_img_badge: "Experiencia sin esperas",
    diner_main_img_title: "La libertad de comer sin pausas ni esperas",
    diner_main_img_desc: "Vive la experiencia gastronómica que siempre mereciste en tus restaurantes predilectos.",
    diner_app_badge: "App Móvil Diners",
    diner_app_title: "Tu restaurante predilecto, ahora a un toque de distancia",
    diner_app_desc: "Diseñada para que descubras, reserves y comas sin fricciones ni pérdidas de tiempo.",
    diner_img_1_badge: "Paso 1",
    diner_img_1_title: "1. Colas Virtuales Simultáneas",
    diner_img_1_desc: "Pide tu turno en varios locales cercanos y decide sobre la marcha con tiempos de espera reales.",
    diner_img_2_badge: "Paso 2",
    diner_img_2_title: "2. Menú Interactivo en Vivo",
    diner_img_2_desc: "Fotografías reales, disponibilidad al instante y especificaciones exactas para la cocina.",
    diner_img_3_badge: "Paso 3",
    diner_img_3_title: "3. Mesa y Pedido Confirmados",
    diner_img_3_desc: "Tu comida entra a preparación para coincidir exactamente con el minuto en que tomas asiento.",
    diner_video_badge: "Cómo funciona",
    diner_video_title: "¿Cómo funciona para ti?",
    diner_video_sub: "Una demostración rápida de cómo tu próxima salida a comer será la más rápida, fresca y placentera."
  },

  en: {
    // Header & Navigation
    nav_logo_alt: "Yummizi Logo",
    nav_for_restaurants: "For Restaurants",
    nav_for_diners: "For Diners",
    nav_home: "Home",
    nav_lang_es: "ES",
    nav_lang_en: "EN",
    nav_lang_toggle_aria: "Switch language (Spanish / English)",

    // SEO Meta (Index)
    seo_title: "Yummizi | Zero Time Dining - Smart Table & Advance Food Ordering",
    seo_description: "Yummizi redefines dining: virtual queues, dish confirmation before arrival, and zero wait time for diners and restaurants.",
    seo_h1: "Yummizi: Zero Time Dining - The Advance Food & Table Revolution",

    // Hero Section (Index)
    hero_title: "Yummizi is",
    hero_scene_1_top: "3<br />Breaking the classic combination of hunger and waiting",
    hero_scene_1_bottom: "Inside restaurants",
    hero_scene_2_top: "2<br />An opportunity for a restaurant",
    hero_scene_2_bottom: "A tech opportunity",
    hero_scene_3_top: "1<br />A relief for diners",
    hero_scene_3_bottom: "Even before arriving the restaurant",
    hero_scene_4: "A quick, easy and delicious experience 😌",

    // Comparison Section
    comparison_title: "Discover the Yummizi way",
    comparison_before_badge: "Before...",
    comparison_after_badge: "With Yummizi...",
    comp_row_1_before: "Diners used to hope that there would be an available table at the restaurant they want",
    comp_row_1_after: "Diners can confirm their table and dishes even before arriving",
    comp_row_2_before: "Restaurants used to wait until diners arrive to start cooking",
    comp_row_2_after: "Restaurant can prepare the diner's food in a timely manner: keep quality, increase engagement",
    comp_row_3_before: "Queues were unpredictable for diners",
    comp_row_3_after: "Diners can join virtual queues and restaurants can control them with ease",
    comp_row_4_before: "Diners used to wait while they were hungry. Normalized, wasn't it?",
    comp_row_4_after: "Diners wait much less time or simply don't wait for their food",
    comp_row_5_before: "Initial wasted time takes its toll on newcomers",
    comp_row_5_after: "Diners don't have a hurried experience, but a truly efficient one",

    // Benefits Section
    benefits_title: "Discover Our Benefits",
    card_1_resto_badge: "Restaurant Benefit",
    card_1_resto_title: "A more predictable flow of users",
    card_1_diner_badge: "Diner Experience",
    card_1_diner_title: "Diners can make more than one virtual queue simultaneously",
    
    card_2_resto_badge: "Restaurant Benefit",
    card_2_resto_title: "The table turnover increases daily",
    card_2_diner_badge: "Diner Experience",
    card_2_diner_title: "Diners wait much less time for their food when arriving at the restaurant",

    card_3_resto_badge: "Restaurant Benefit",
    card_3_resto_title: "An organized record of service and visual data analysis",
    card_3_diner_badge: "Diner Experience",
    card_3_diner_title: "Diners can know dish availability in real time",

    card_4_resto_badge: "Restaurant Benefit",
    card_4_resto_title: "The likelihood that customers will return later increases",
    card_4_diner_badge: "Diner Experience",
    card_4_diner_title: "Diners can inform the restaurant about their specifications in advance",

    // Waitlist Modal
    modal_title: "Stay <span class=\"font-bold\">launch</span>-ready",
    modal_subtitle: "Secure your spot",
    form_name_placeholder: "Your Name *",
    form_type_default: "Who is this for? *",
    form_type_diner: "I'm a Diner",
    form_type_resto: "I'm a Restaurant",
    form_resto_placeholder: "Restaurant's Official Name *",
    form_email_placeholder: "Email Address *",
    form_question_placeholder: "Any questions for us?",
    form_submit_btn: "KEEP ME UP TO DATE!",
    form_policy_agreement: "I have read and agree to the <a href=\"#\" id=\"privacy-policy-link\" class=\"text-[#ff751f] hover:text-[#ff6105] underline font-bold\">Privacy Policy</a> and consent to being contacted regarding the waiting list.",
    form_policy_error: "The checkbox must be checked to continue",

    // Privacy Policy
    privacy_title: "Yummizi Privacy Policy",
    privacy_back_btn: "GO BACK",
    privacy_controller_title: "Data Controller Identity",
    privacy_controller_p: "The party responsible for processing your personal data is Piero Stephano Olivas Tuesta, acting on behalf of the Yummizi (under incorporation) project, with headquarters in Lima, Peru.",
    privacy_purpose_title: "Purpose of Data Collection",
    privacy_purpose_p: "The personal data requested through our contact form (Name, Email Address, and Restaurant Name) will be processed to register your interest in Yummizi's launch, send direct commercial & technical updates, and contact you for beta testing.",
    privacy_retention_title: "Data Storage and Retention Period",
    privacy_retention_p: "Your data will be stored in a digital database named 'Yummizi LP' for a period of 2 years or until you formally revoke your consent.",
    privacy_transfers_title: "International Data Transfers (Cross-Border Flow)",
    privacy_transfers_p: "We utilize world-class third-party cloud infrastructure (Netlify and Supabase). Your data may be processed on secure global servers under strict international privacy standards.",
    privacy_rights_title: "Your Rights (ARCO Rights)",
    privacy_rights_p: "In accordance with international privacy standards and Peruvian Law No. 29733, you have the right to Access, Rectify, Cancel, or Oppose (ARCO) processing at yummizi.mkt@gmail.com with the subject line 'Privacy Rights Request'.",
    privacy_mandatory_title: "Mandatory Nature of Information",
    privacy_mandatory_p: "Providing the requested data is mandatory to join our early-access waitlist.",

    // Footer
    footer_text: "Yummi yummi",

    // Restaurants Page (restaurants.html)
    resto_page_title: "Yummizi for Restaurants | Maximize Table Turnover & Kitchen Efficiency",
    resto_page_desc: "Streamline prep times, manage virtual queues in real time, and scale revenue with Yummizi's Zero Time Dining technology.",
    resto_hero_badge: "B2B FoodTech Technology",
    resto_hero_phrase: "Optimize your kitchen, multiply table turnover, and delight your diners.",
    resto_hero_sub: "Yummizi syncs diners before arrival so your kitchen executes orders with pinpoint timing. Zero idle tables, maximum satisfaction.",
    resto_cta_button: "Join as a Partner Restaurant",
    resto_cta_note: "Fast setup without complex hardware. Opens in a new tab.",
    resto_app_badge: "Restaurant Operating Suite",
    resto_app_title: "Built for the real tempo of restaurant service",
    resto_app_desc: "Three connected modules unifying dining room, kitchen display, and management analytics.",
    resto_img_1_badge: "Kitchen Display",
    resto_img_1_title: "1. Advance Kitchen Display & Prep Board",
    resto_img_1_desc: "Streamlined ticket scheduling before the customer even takes their seat.",
    resto_img_2_badge: "Host & Floor Control",
    resto_img_2_title: "2. Smart Virtual Queue Manager",
    resto_img_2_desc: "Dynamic turn management, check-in tracking, and zero sidewalk crowding at your entrance.",
    resto_img_3_badge: "Management KPIs",
    resto_img_3_title: "3. Real-time Service & Turnover Analytics",
    resto_img_3_desc: "Actionable metrics on rush hours, item popularity, and ticket fulfillment times.",
    resto_list_badge: "Proven Value",
    resto_list_title: "What your restaurant gains with Yummizi",
    resto_bullet_1: "Up to 35% higher table turnover during peak rush dining hours.",
    resto_bullet_2: "Predictable food preparation synchronized with diner arrival.",
    resto_bullet_3: "Drastic reduction in walk-aways from long front-door wait lines.",
    resto_bullet_4: "Live digital menu with instant availability toggles.",
    resto_bullet_5: "Actionable data to reduce kitchen waste and streamline inventory.",
    resto_video_badge: "Video Demonstration",
    resto_video_title: "See Yummizi in action inside a restaurant",
    resto_video_sub: "Watch how Zero Time Dining transforms a busy dinner rush in less than 2 minutes.",

    // Diners Page (diners.html)
    diner_page_title: "Yummizi for Diners | Zero Waiting Time for Great Food",
    diner_page_desc: "Order your favorite dishes and confirm your table before arriving at the restaurant. Say goodbye to lines with Yummizi.",
    diner_hero_badge: "Diner Experience",
    diner_hero_phrase: "Arrive, sit down, and enjoy: Your food ready at the exact moment.",
    diner_hero_sub: "Never stare at the clock while hungry again. With Yummizi, choose your favorite dishes before leaving home, and your meal is served promptly.",
    diner_cta_button: "Get Yummizi for Diners",
    diner_cta_note: "Available soon on iOS & Android. Opens in a new tab.",
    diner_main_img_badge: "Frictionless Dining",
    diner_main_img_title: "The freedom to dine without pauses or waiting",
    diner_main_img_desc: "Experience frictionless dining at the finest local restaurants.",
    diner_app_badge: "Diner Mobile App",
    diner_app_title: "Your favorite restaurant, now one tap away",
    diner_app_desc: "Crafted to let you discover, reserve, and eat without friction.",
    diner_img_1_badge: "Step 1",
    diner_img_1_title: "1. Simultaneous Virtual Queues",
    diner_img_1_desc: "Queue up for multiple spots and pick based on live estimated arrival times.",
    diner_img_2_badge: "Step 2",
    diner_img_2_title: "2. Live Interactive Menu",
    diner_img_2_desc: "Real high-res dishes, real-time availability, and instant chef notes.",
    diner_img_3_badge: "Step 3",
    diner_img_3_title: "3. Confirmed Table & Dish Sync",
    diner_img_3_desc: "Your dishes fire in the kitchen exactly to meet you as you sit down.",
    diner_video_badge: "How It Works",
    diner_video_title: "How does it work for you?",
    diner_video_sub: "A swift preview of why your next meal out will be your smoothest yet."
  }
};

class I18nManager {
  constructor() {
    this.storageKey = 'yummizi_lang';
    this.currentLang = this.getInitialLanguage();
  }

  getInitialLanguage() {
    // Default to Spanish ('es') strictly as requested
    const saved = localStorage.getItem(this.storageKey);
    if (saved === 'es' || saved === 'en') {
      return saved;
    }
    return 'es';
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.setupEventListeners();
  }

  applyLanguage(lang) {
    this.currentLang = lang;
    localStorage.setItem(this.storageKey, lang);
    document.documentElement.lang = lang;

    const dict = YUMMIZI_TRANSLATIONS[lang] || YUMMIZI_TRANSLATIONS.es;

    // 1. Text elements
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        if (dict[key].includes('<') && dict[key].includes('>')) {
          el.innerHTML = dict[key];
        } else {
          el.textContent = dict[key];
        }
      }
    });

    // 2. Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (dict[key] !== undefined) {
        el.setAttribute('placeholder', dict[key]);
      }
    });

    // 3. Aria labels
    document.querySelectorAll('[data-i18n-aria]').forEach((el) => {
      const key = el.getAttribute('data-i18n-aria');
      if (dict[key] !== undefined) {
        el.setAttribute('aria-label', dict[key]);
      }
    });

    // 4. Update Document Title & Meta Description if page specifies key
    const pageTitleKey = document.body?.getAttribute('data-page-title-key');
    if (pageTitleKey && dict[pageTitleKey]) {
      document.title = dict[pageTitleKey];
    }
    const pageDescKey = document.body?.getAttribute('data-page-desc-key');
    if (pageDescKey && dict[pageDescKey]) {
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute('content', dict[pageDescKey]);
    }

    // 5. Update Switch UI state
    this.updateToggleUI(lang);
  }

  updateToggleUI(lang) {
    const toggleBtn = document.getElementById('lang-toggle-btn');
    const pill = document.getElementById('lang-toggle-pill');
    const labelEs = document.getElementById('lang-label-es');
    const labelEn = document.getElementById('lang-label-en');

    if (!toggleBtn) return;

    if (lang === 'es') {
      if (pill) {
        pill.style.transform = 'translateX(0px)';
      }
      if (labelEs) {
        labelEs.classList.add('text-white', 'font-bold');
        labelEs.classList.remove('text-[#001560]/70');
      }
      if (labelEn) {
        labelEn.classList.add('text-[#001560]/70');
        labelEn.classList.remove('text-white', 'font-bold');
      }
      toggleBtn.setAttribute('aria-checked', 'false');
    } else {
      if (pill) {
        pill.style.transform = 'translateX(34px)';
      }
      if (labelEn) {
        labelEn.classList.add('text-white', 'font-bold');
        labelEn.classList.remove('text-[#001560]/70');
      }
      if (labelEs) {
        labelEs.classList.add('text-[#001560]/70');
        labelEs.classList.remove('text-white', 'font-bold');
      }
      toggleBtn.setAttribute('aria-checked', 'true');
    }
  }

  toggle() {
    const nextLang = this.currentLang === 'es' ? 'en' : 'es';
    this.applyLanguage(nextLang);
  }

  setupEventListeners() {
    const toggleBtn = document.getElementById('lang-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
    }

    const labelEs = document.getElementById('lang-label-es');
    if (labelEs) {
      labelEs.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.currentLang !== 'es') this.applyLanguage('es');
      });
    }

    const labelEn = document.getElementById('lang-label-en');
    if (labelEn) {
      labelEn.addEventListener('click', (e) => {
        e.preventDefault();
        if (this.currentLang !== 'en') this.applyLanguage('en');
      });
    }
  }
}

// Global instance
window.yummiziI18n = new I18nManager();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.yummiziI18n.init());
} else {
  window.yummiziI18n.init();
}
