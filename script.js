const navToggle = document.querySelector('.mobile-nav-toggle');
const navMenu = document.querySelector('.site-nav');
const techItems = document.querySelectorAll('.tech-item');
const stackDetailText = document.querySelector('.stack-detail-text');
const revealElements = document.querySelectorAll('.reveal, .reveal-item');
const contactForm = document.getElementById('contactForm');

function toggleMenu() {
  const expanded = navToggle.getAttribute('aria-expanded') === 'true';
  navToggle.setAttribute('aria-expanded', String(!expanded));
  navMenu.classList.toggle('open');
}

function closeMenu() {
  navToggle.setAttribute('aria-expanded', 'false');
  navMenu.classList.remove('open');
}

navToggle.addEventListener('click', toggleMenu);
navMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', closeMenu);
});

techItems.forEach((button) => {
  button.addEventListener('mouseenter', () => {
    stackDetailText.textContent = button.dataset.detail;
  });
  button.addEventListener('focus', () => {
    stackDetailText.textContent = button.dataset.detail;
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  {
    threshold: 0.15,
  }
);

revealElements.forEach((element) => observer.observe(element));

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fields = Array.from(contactForm.querySelectorAll('[required]'));
    let valid = true;

    fields.forEach((field) => {
      const errorElement = field.parentElement.querySelector('.field-error');
      if (!field.value.trim()) {
        valid = false;
        errorElement.textContent = 'This field is required.';
      } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value)) {
        valid = false;
        errorElement.textContent = 'Enter a valid email address.';
      } else {
        errorElement.textContent = '';
      }
    });

    const feedback = contactForm.querySelector('.form-feedback');
    if (valid) {
      feedback.textContent = 'Thank you — your request is ready to send. I will review this and reply soon.';
      contactForm.reset();
    } else {
      feedback.textContent = 'Please correct the highlighted fields and try again.';
    }
  });
}
