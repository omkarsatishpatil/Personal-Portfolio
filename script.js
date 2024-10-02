// Get all the navbar links
const navLinks = document.querySelectorAll('.navbar a');

// Add click event to each navbar link
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();

    // Remove the 'active' class from all sections and add 'hidden'
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('hidden');
      section.classList.remove('active');
    });

    // Get the section ID based on the link's href attribute or text content
    const targetID = this.textContent.trim(); // Use the text content of the link
    const targetSection = document.getElementById(targetID);

    // Check if target section exists
    if (targetSection) {
      // Show the clicked section by adding 'active' and removing 'hidden'
      targetSection.classList.remove('hidden');
      targetSection.classList.add('active');
    }
  });
});
