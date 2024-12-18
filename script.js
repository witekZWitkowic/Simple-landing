const faqQuestions = document.querySelectorAll('.page_faq')

faqQuestions.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})

document.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    
    let currentSection = "";
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.getAttribute("id");
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove("activeLi");
      if (link.getAttribute("href").substring(1) === currentSection) {
        link.classList.add("activeLi");
      }
    });
  });