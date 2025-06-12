console.log('GoodStandingAI site loaded');

// Accordion functionality for business overview
document.querySelectorAll('.accordion-header').forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    header.classList.toggle('bg-green-500');
    header.classList.toggle('text-white');
    const content = header.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px';
    }
  });
});
