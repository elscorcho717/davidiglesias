// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card, .cred, .expertise-item, .about-right p, .about-lead').forEach(el => {
  el.classList.add('reveal');
  observer.observe(el);
});

// Active nav link highlight on scroll
const sections = document.querySelectorAll('section[id], header.hero');
const navLinks = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => link.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.style.color = '#c8a96e';
    }
  });
}, { threshold: 0.5 });

sections.forEach(s => navObserver.observe(s));
