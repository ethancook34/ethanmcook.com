const toggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.nav-links');
const year = document.getElementById('year');

if (year) year.textContent = new Date().getFullYear();

if (toggle && links) {
  toggle.addEventListener('click', () => {
    const open = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  links.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const backToTop = document.querySelector('.back-to-top');
const aboutSection = document.getElementById('about');

function updateBackToTopVisibility() {
  if (!backToTop || !aboutSection) return;
  const triggerPoint = aboutSection.offsetTop - 140;
  backToTop.classList.toggle('visible', window.scrollY >= triggerPoint);
}

window.addEventListener('scroll', updateBackToTopVisibility, { passive: true });
window.addEventListener('resize', updateBackToTopVisibility);
updateBackToTopVisibility();
