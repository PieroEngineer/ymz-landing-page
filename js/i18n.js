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
    nav_for_diners: "Para usuarios",
    nav_home: "Inicio",
    nav_lang_es: "ES",
    nav_lang_en: "EN",
    nav_lang_toggle_aria: "Cambiar idioma (Español / Inglés)",

    // SEO Meta (Index)
    seo_title: "Yummizi | Optimize timing in restaurants - Reserva de mesa y pedidos sin espera",
    seo_description: "Yummizi transforma la experiencia gastronómica: colas virtuales, confirmación de platos antes de llegar y cero esperas para comensales y restaurantes.",
    seo_h1: "Yummizi: Optimize timing in restaurants - La revolución en reservas y pedidos anticipados",

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
    resto_page_title: "Yummizi | Una experiencia ágil, fácil y deliciosa",
    resto_page_desc: "Optimiza los tiempos de preparación, gestiona colas virtuales en tiempo real y aumenta tus ingresos con la tecnología que optimiza los tiempos de tu restaurante.",
    resto_hero_badge: "Tecnología para restaurantes",
    resto_hero_phrase: "Optimiza los tiempos dentro de tu restaurante, mejora la experiencia de tus clientes",
    resto_hero_sub: "Sabrás en todo momento quién está llegando, a quien aceptas y quién realizó su pago. ¡Todo antes de que el cliente entre al restaurante!",
    resto_cta_button: "Unirse como Restaurante Aliado",
    resto_cta_note: "Cero descargas. Agilidad total.",
    resto_cta_note2: "(Actualmente el servicio es completamente gratuito 🎁)",
    resto_app_badge: "¿Difícil de creer? 👀 Continua leyendo...",
    resto_app_title: "Decides cuándo, cuál y cómo intuitivamente",
    resto_app_desc: "¡ Empezamos fuertes !",
    resto_img_1_badge: "Menu virtual",
    resto_img_1_title: "1. Menu digital  e interactivo en tiempo real",
    resto_img_1_desc: "Puedes modificar tu menu en cualquier momento y de forma rápida. Cada click cuenta",
    resto_img_2_badge: "control de solicitudes",
    resto_img_2_title: "2. Panel con etapas controladas",
    resto_img_2_desc: "Decides qué solicitudes entran, sus tiempos a detalle, sus pagos. Listo para preparar",
    resto_img_3_badge: "Visibiliza tu restaurante",
    resto_img_3_title: "3. Impacta más allá del vecindario 🔭",
    resto_img_3_desc: "Crecemos juntos 🫂 Cada que Yummizi crece, más usuarios visualizan tu restaurante.",
    resto_list_badge: "¡Buenas noticias!",
    resto_list_title: "Lo que ganas integrando Yummizi en tu restaurante",
    resto_bullet_1: "Preparación anticipada ➡️ Optimización de tiempo.",
    resto_bullet_2: "Optimización de tiempo ➡️ Mejor experiencia de usuario.",
    resto_bullet_3: "Optimización de tiempo ➡️ Mayor rotación de mesas a diario",
    resto_bullet_4: "Mayor rotación de mesas a diario ➡️ Mayores ingresos a diario.",
    resto_bullet_5: "Ventaja frente a restaurantes cercanos. ⬆️",
    resto_video_badge: "¿Ver para creer? 👀",
    resto_video_title: "Aprende a usar Yummizi en menos de 4 minutos",
    resto_video_sub: "Así es como Yummizi optimiza tus tiempos. ⚡",
    resto_definition_question: "¿Listo para revolucionar tu servicio?",
    resto_definition_text: "Súmate a la red de restaurantes que ya están eliminando las esperas innecesarias.",
    resto_definition_button_text: "Unirse como Restaurante Aliado",

    // Diners Page (diners.html)
    diner_page_title: "Yummizi | Una experiencia ágil, fácil y deliciosa",
    diner_page_desc: "Pide tus platillos y confirma tu mesa antes de llegar al restaurante. Dile adiós a las filas con Yummizi.",
    diner_hero_badge: "Nueva experiencia para usuarios",
    diner_hero_phrase: "Antes esperabas por la cola, toma de pedido, ticket y cocina, pero hoy eso cambia",
    diner_hero_sub: "Si el hambre y la espera son polos opuestos ¿Por qué esta combinación es la primera experiencia que millones de usaurios reciben cuando llegan a un restaurante?.",
    diner_cta_button: "Unirser a la nueva experiencia",
    diner_cta_note: "Acceso anticipado completamente gratis 🎁",
    diner_main_img_badge: "Experiencia sin esperas",
    diner_main_img_title: "La libertad de comer sin pausas ni esperas",
    diner_main_img_desc: "Vive la experiencia gastronómica que siempre mereciste en tus restaurantes predilectos.",
    diner_app_badge: "¿Difícil de creer? 👀 Continua leyendo...",
    diner_app_title: "¿Para qué esperar con hambre, para qué hacer cola?",
    diner_app_desc: "Creado para anticipar tu pedido, para virtualizar las colas, para conectar fácil con restaurantes. Creado para ti.",
    diner_img_1_badge: "Colas virtuales",
    diner_img_1_title: "1. Colas Virtuales Simultáneas",
    diner_img_1_desc: "Puedes realizar colas virtuales en múltiples restaurantes al mismo tiempo. Podrás escoger entre los que acepten tu solicitud de mesa.",
    diner_img_2_badge: "Menu digital",
    diner_img_2_title: "2. Menú Interactivo intuitivo",
    diner_img_2_desc: "Presionas en la comida que quieras, super directo, sin rodeos.",
    diner_img_3_badge: "Preparación anticipada",
    diner_img_3_title: "3. Tu comida y tú llegan casi al mismo tiempo",
    diner_img_3_desc: "Tan pronto realizas tu pago, el restaurante sincroniza tu llegada con la preparación de tu comida.",
    diner_video_badge: "¿Ver para creer? 👀",
    diner_video_title: "Aprende a usar Yummizi en menos de 4 minutos",
    diner_video_sub: "Así es como Yummizi optimiza tus tiempos. ⚡.",
    diner_definition_question: "Comer rico nunca fue tan rápido",
    diner_definition_text: "Si no quieres combinar el hambre y la espera en el mismo plato, escoge Yummizi",
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
    seo_title: "Yummizi | Optimize timing in restaurants - Smart Table & Advance Food Ordering",
    seo_description: "Yummizi redefines dining: virtual queues, dish confirmation before arrival, and reduce drastically wait time for diners and restaurants.",
    seo_h1: "Yummizi: Optimize timing in restaurants - The Advance Food & Table Revolution",

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
    resto_page_title: "Yummizi for Restaurants | Maximize your kitchen's turnover and efficiency",
    resto_page_desc: "Optimize prep times, manage virtual queues in real time, and boost your revenue by using our technology to synchronize your kitchen with the customer's arrival.",
    resto_hero_badge: "Technology for restaurants",
    resto_hero_phrase: "Optimize times within your restaurant and improve your customers' experience",
    resto_hero_sub: "You will know at all times who is arriving, who you accept, and who paid. All before the customer even steps inside!",
    resto_cta_button: "Join as a Partner Restaurant",
    resto_cta_note: "Zero downloads. Total agility.",
    resto_cta_note2: "(The service is currently completely free 🎁)",
    resto_app_badge: "Hard to believe? 👀 Keep reading...",
    resto_app_title: "Decide when, which, and how intuitively",
    resto_app_desc: "Starting off strong!",
    resto_img_1_badge: "Virtual menu",
    resto_img_1_title: "1. Digital & interactive real-time menu",
    resto_img_1_desc: "Modify your menu at any time and in seconds. Every click counts",
    resto_img_2_badge: "Request control",
    resto_img_2_title: "2. Panel with controlled stages",
    resto_img_2_desc: "You decide which requests come in, their detailed times, and payments. Ready to prep",
    resto_img_3_badge: "Make your restaurant visible",
    resto_img_3_title: "3. Reach beyond the neighborhood 🔭",
    resto_img_3_desc: "Growing together 🫂 Every time Yummizi grows, more users see your restaurant.",
    resto_list_badge: "Good news!",
    resto_list_title: "What you gain by integrating Yummizi into your restaurant",
    resto_bullet_1: "Advance preparation ➡️ Time optimization.",
    resto_bullet_2: "Time optimization ➡️ Better user experience.",
    resto_bullet_3: "Time optimization ➡️ Higher daily table turnover.",
    resto_bullet_4: "Higher daily table turnover ➡️ Greater daily revenue.",
    resto_bullet_5: "An edge over nearby restaurants. ⬆️",
    resto_video_badge: "Seeing is believing? 👀",
    resto_video_title: "Learn to use Yummizi in less than 4 minutes",
    resto_video_sub: "This is how Yummizi optimizes your times. ⚡",
    resto_definition_question: "Ready to revolutionize your service?",
    resto_definition_text: "Join the network of restaurants already eliminating unnecessary wait times.",
    resto_definition_button_text: "Join as a Partner Restaurant",

    // Diners Page (diners.html)
    diner_page_title: "Yummizi | A fast, easy, and delicious experience",
    diner_page_desc: "Order your dishes and secure your table before arriving at the restaurant. Say goodbye to lines with Yummizi.",
    diner_hero_badge: "A new user experience",
    diner_hero_phrase: "You used to wait in line, wait to order, wait for the check, and wait for the kitchen—but today, that changes",
    diner_hero_sub: "If hunger and waiting are polar opposites, why is this combination the very first experience millions of users face when arriving at a restaurant?",
    diner_cta_button: "Join the new experience",
    diner_cta_note: "Early access completely free 🎁",
    diner_main_img_badge: "A wait-free experience",
    diner_main_img_title: "The freedom to dine without pauses or delays",
    diner_main_img_desc: "Enjoy the dining experience you've always deserved at your favorite restaurants.",
    diner_app_badge: "Hard to believe? 👀 Keep reading...",
    diner_app_title: "Why wait when you're hungry? Why stand in line?",
    diner_app_desc: "Built to anticipate your order, virtualize lines, and easily connect you with restaurants. Built for you.",
    diner_img_1_badge: "Virtual lines",
    diner_img_1_title: "1. Simultaneous Virtual Lines",
    diner_img_1_desc: "You can join virtual lines at multiple restaurants at the same time. Then, simply choose from the ones that accept your table request.",
    diner_img_2_badge: "Digital menu",
    diner_img_2_title: "2. Intuitive Interactive Menu",
    diner_img_2_desc: "Tap the food you want—straightforward, direct, and hassle-free.",
    diner_img_3_badge: "Advance preparation",
    diner_img_3_title: "3. You and your food arrive at the exact same time",
    diner_img_3_desc: "As soon as you pay, the restaurant syncs your arrival with the preparation of your meal.",
    diner_video_badge: "Seeing is believing? 👀",
    diner_video_title: "Learn how to use Yummizi in less than 4 minutes",
    diner_video_sub: "This is how Yummizi optimizes your time. ⚡.",
    diner_definition_question: "Enjoying great food has never been this fast",
    diner_definition_text: "Join the network of restaurants that are already eliminating unnecessary wait times.",
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
