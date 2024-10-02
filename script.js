document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tab-link');
  const sections = document.querySelectorAll('.section-con');

  function showSection(sectionId) {
    sections.forEach(section => {
      section.style.display = section.id === sectionId ? 'block' : 'none';
    });
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', (event) => {
      event.preventDefault();
      const targetSection = tab.getAttribute('href').substring(1);
      showSection(targetSection);
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    });
  });

  // Display the 'home' section by default
  showSection('home');
});