// Menú hamburguesa: abrir / cerrar y accesibilidad
const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('#primary-navigation') || document.querySelector('.nav-list');

function openNav() {
  navList.classList.add('open');
  toggleBtn.setAttribute('aria-expanded', 'true');
  // Set explicit height for smooth animation using content height
  if (window.matchMedia('(max-width: 760px)').matches) {
    navList.style.maxHeight = navList.scrollHeight + 'px';
  } else {
    navList.style.maxHeight = '';
  }
}
function closeNav() {
  // Animate to zero height then remove open class after transition
  if (window.matchMedia('(max-width: 760px)').matches) {
    navList.style.maxHeight = '0';
    const onEnd = () => { navList.classList.remove('open'); navList.removeEventListener('transitionend', onEnd); };
    navList.addEventListener('transitionend', onEnd);
  } else {
    navList.classList.remove('open');
  }
  toggleBtn.setAttribute('aria-expanded', 'false');
}

if (toggleBtn && navList) {
  toggleBtn.addEventListener('click', () => {
    if (navList.classList.contains('open')) closeNav(); else openNav();
  });

  // Cerrar al hacer click en un enlace (útil en móviles)
  navList.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (window.matchMedia('(max-width: 760px)').matches) closeNav();
    });
  });

  // Cerrar al hacer click fuera del header
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-container') && navList.classList.contains('open')) closeNav();
  });

  // Cerrar con Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navList.classList.contains('open')) closeNav();
  });

  // Asegurar estado consistente al redimensionar
  window.addEventListener('resize', () => {
    if (!window.matchMedia('(max-width: 760px)').matches) {
      // On larger screens, clear any inline max-height and ensure open state doesn't rely on it
      navList.style.maxHeight = '';
      closeNav();
    } else {
      // If switching to small screen and menu is open, adjust height
      if (navList.classList.contains('open')) navList.style.maxHeight = navList.scrollHeight + 'px';
    }
  });

  // Estado inicial: cerrado en móviles
  if (window.matchMedia('(max-width: 760px)').matches) {
    // Ensure collapsed look on load
    navList.classList.remove('open');
    navList.style.maxHeight = '0';
  } else {
    navList.style.maxHeight = '';
  }
}
// Selector de idioma
const langButtons = document.querySelectorAll('.lang-btn');
function applyLanguage(lang) {
  langButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
  const btn = document.querySelector(`.lang-btn[data-lang="${lang}"]`);
  if (btn) { btn.classList.add('active'); btn.setAttribute('aria-pressed', 'true'); }
  document.documentElement.setAttribute('lang', lang);
  const h1 = document.querySelector('main h1');
  const p = document.querySelector('main p');
  if (lang === 'en') {
    h1.textContent = 'Welcome to Impulsum';
    p.textContent = 'Header with navigation, social links and language switcher, ready for your project.';
    const labelsEN = ['About Us', 'Services', 'Solutions', 'Technologies', 'Culture', 'Clients', 'Blog', 'Contact'];
    document.querySelectorAll('.nav-list a').forEach((a, i) => a.textContent = labelsEN[i]);
  } else {
    h1.textContent = 'Bienvenido a Impulsum';
    p.textContent = 'Cabecera con navegación, redes y selector de idioma, lista para tu proyecto.';
    const labelsES = ['Sobre nosotros', 'Servicios', 'Soluciones', 'Tecnologías', 'Cultura', 'Clientes', 'Blog', 'Contacto'];
    document.querySelectorAll('.nav-list a').forEach((a, i) => a.textContent = labelsES[i]);
  }
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang || 'es'));
});

// Inicializar idioma por defecto según botón activo o atributo `lang`
const initialBtn = document.querySelector('.lang-btn.active');
const initialLang = initialBtn ? initialBtn.dataset.lang : (document.documentElement.getAttribute('lang') || 'es');
applyLanguage(initialLang);
function updateActiveNav() {
  const hash = window.location.hash || '#about';
  document.querySelectorAll('.nav-list a').forEach(a => {
    const isCurrent = a.getAttribute('href') === hash;
    if (isCurrent) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateActiveNav);
updateActiveNav();
