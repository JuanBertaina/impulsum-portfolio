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
    p.textContent = 'We automate processes, unify data and train teams to make better decisions.';
    const labelsEN = ['About Us', 'Services', 'Solutions', 'Technologies', 'Clients', 'Blog', 'Contact'];
    document.querySelectorAll('.nav-list a').forEach((a, i) => a.textContent = labelsEN[i]);
  } else {
    h1.textContent = 'Bienvenido a Impulsum';
    p.textContent = 'Automatizamos procesos, unificamos datos y entrenamos equipos para decidir mejor.';
    const labelsES = ['Sobre nosotros', 'Servicios', 'Soluciones', 'Tecnologías', 'Clientes', 'Blog', 'Contacto'];
    document.querySelectorAll('.nav-list a').forEach((a, i) => a.textContent = labelsES[i]);
  }

  // Re-check nav overflow after labels change
  setTimeout(checkNavOverflow, 60);
}

langButtons.forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang || 'es'));
});

// Inicializar idioma por defecto según botón activo o atributo `lang`
const initialBtn = document.querySelector('.lang-btn.active');
const initialLang = initialBtn ? initialBtn.dataset.lang : (document.documentElement.getAttribute('lang') || 'es');
applyLanguage(initialLang);
function updateActiveNav() {
  const hash = window.location.hash || '#propuesta';
  document.querySelectorAll('.nav-list a').forEach(a => {
    const isCurrent = a.getAttribute('href') === hash;
    if (isCurrent) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateActiveNav);
updateActiveNav();

// Smooth scroll for internal anchors (CTAs)
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const href = a.getAttribute('href');
    if (href && href.startsWith('#')) {
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        history.replaceState(null, '', href);
      }
    }
  });
});

// Nav overflow -> collapse to hamburger
function checkNavOverflow() {
  if (!toggleBtn || !navList) return;
  // determine if nav-list overflows its visible width
  const isOverflowing = navList.scrollWidth > navList.clientWidth;
  if (isOverflowing) {
    navList.classList.add('collapsed');
    // show toggle so user can open it
    toggleBtn.style.display = 'inline-block';
    // start closed
    navList.classList.remove('open');
    navList.style.maxHeight = '0';
    toggleBtn.setAttribute('aria-expanded', 'false');
  } else {
    // not overflowing: ensure normal horizontal layout
    navList.classList.remove('collapsed');
    navList.classList.remove('open');
    navList.style.maxHeight = '';
    // hide toggle except on small screens where CSS shows it
    if (!window.matchMedia('(max-width: 760px)').matches) toggleBtn.style.display = 'none';
    toggleBtn.setAttribute('aria-expanded', 'false');
  }
}

// wire check on resize and load
window.addEventListener('resize', checkNavOverflow);
window.addEventListener('load', checkNavOverflow);
window.addEventListener('orientationchange', checkNavOverflow);



// enhance openNav / closeNav to support collapsed mode
function openNav() {
  navList.classList.add('open');
  toggleBtn.setAttribute('aria-expanded', 'true');
  // Set explicit height for smooth animation using content height when collapsed or mobile
  if (navList.classList.contains('collapsed') || window.matchMedia('(max-width: 760px)').matches) {
    navList.style.maxHeight = navList.scrollHeight + 'px';
  } else {
    navList.style.maxHeight = '';
  }
}
function closeNav() {
  // Animate to zero height then remove open class after transition
  if (navList.classList.contains('collapsed') || window.matchMedia('(max-width: 760px)').matches) {
    navList.style.maxHeight = '0';
    const onEnd = () => { navList.classList.remove('open'); navList.removeEventListener('transitionend', onEnd); };
    navList.addEventListener('transitionend', onEnd);
  } else {
    navList.classList.remove('open');
  }
  toggleBtn.setAttribute('aria-expanded', 'false');
}

// Contact form handling: open mail client with prefilled message
const contactForm = document.getElementById('contact-form');
const feedback = document.getElementById('contact-feedback');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(contactForm);
    const name = fd.get('name') || '';
    const company = fd.get('company') || '';
    const email = fd.get('email') || '';
    const message = fd.get('message') || '';
    const subject = encodeURIComponent('Solicitud de diagnóstico - Impulsum');
    const body = encodeURIComponent(`Nombre: ${name}\nEmpresa: ${company}\nEmail: ${email}\n\nMensaje:\n${message}`);
    const mailto = `mailto:contacto@impulsum.com.ar?subject=${subject}&body=${body}`;
    if (feedback) { feedback.hidden = false; feedback.textContent = 'Abriendo tu cliente de correo...'; }
    window.location.href = mailto;
    setTimeout(() => {
      if (feedback) feedback.textContent = 'Si no se abrió el correo, podés escribirnos por WhatsApp.';
    }, 1500);
  });

  const waBtn = document.querySelector('.whatsapp-btn');
  if (waBtn) {
    waBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const fd = new FormData(contactForm);
      const name = fd.get('name') || '';
      const company = fd.get('company') || '';
      const message = fd.get('message') || '';
      const text = encodeURIComponent(`Hola, soy ${name}${company ? ' de ' + company : ''}. ${message}`);
      const url = `https://wa.me/5493572667519?text=${text}`;
      window.open(url, '_blank');
    });
  }
}
