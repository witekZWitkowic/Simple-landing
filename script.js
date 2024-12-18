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

  function toggleMenu() {
    const navList = document.querySelector('.navList');
    const hamburger = document.querySelector('.hamburger');
    const allLis = document.querySelectorAll('li a')
    const body = document.querySelector('body');
    allLis.forEach(li => {
        li.addEventListener('click', () => {
            if(hamburger.classList.contains('active')){
                hamburger.classList.remove('active')
                navList.classList.remove('show')
                body.style.overflow = 'auto';
            }
        })
    })
    navList.classList.toggle('show');
    hamburger.classList.toggle('active');

    if (hamburger.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = 'auto';
    }
  }