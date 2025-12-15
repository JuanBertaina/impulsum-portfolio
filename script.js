// Menú hamburguesa
const toggleBtn = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');
if (toggleBtn && navList) {
  toggleBtn.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('open');
    toggleBtn.setAttribute('aria-expanded', String(isOpen));
  });
}
// Selector de idioma
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    langButtons.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
    btn.classList.add('active');
    btn.setAttribute('aria-pressed', 'true');
    const lang = btn.dataset.lang || 'es';
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
  });
});
function updateActiveNav() {
  const hash = window.location.hash || '#about';
  document.querySelectorAll('.nav-list a').forEach(a => {
    const isCurrent = a.getAttribute('href') === hash;
    if (isCurrent) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
}
window.addEventListener('hashchange', updateActiveNav);
updateActiveNav();
