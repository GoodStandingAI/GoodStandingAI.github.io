console.log('GoodStandingAI site loaded');

// Accordion functionality for business overview
const accordionItems = document.querySelectorAll('.accordion-item');
accordionItems.forEach(item => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');
  header.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    accordionItems.forEach(i => {
      i.classList.remove('open');
      i.querySelector('.accordion-content').style.maxHeight = null;
    });
    if (!isOpen) {
      item.classList.add('open');
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});

// Mobile navigation toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('hidden');
  });
}
