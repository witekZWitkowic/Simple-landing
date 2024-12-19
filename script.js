const faqQuestions = document.querySelectorAll('.page_faq')
const form = document.querySelector('.contactForm')

//FAQ open/close
faqQuestions.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active')
    })
})

//Highlighting Navbar Li when on a right section of the page
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

//Hamburger menu open/close
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

//Validation of the Form
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.querySelector('.contactButtonContainer button')

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

    let isValid = true;

    document.querySelectorAll('.errorMessage').forEach(error => error.classList.remove('showError'));
    nameInput.classList.remove('errorInput');
    emailInput.classList.remove('errorInput');
    messageInput.classList.remove('errorInput');
    
    //Chceck if the name is written down
    if (nameValue.length < 1) {
        isValid = false;
        nameInput.classList.add('errorInput');
        showError(nameInput);
    }

    //Chceck if the email is valid
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,3}$/;
    if (!emailRegex.test(emailValue)) {
        isValid = false;
        emailInput.classList.add('errorInput');
        showError(emailInput);
    }

    //Chceck if the message is written down
    if (messageValue.length < 1) {
        isValid = false;
        messageInput.classList.add('errorInput');
        showError(messageInput);
    }

    if (isValid) {
        console.log('Formularz przeszedł walidację!');
        nameInput.value = ''
        emailInput.value = ''
        messageInput.value = 'Thank you for the message!'
        submitBtn.disabled = true;
        setTimeout(() => {
            messageInput.value = ''
            submitBtn.disabled = false;
        }, 2000)
    }
})

//Each input validation function
function showError(inputElement) {
    const errorElement = inputElement.nextElementSibling;
    if (errorElement && errorElement.classList.contains('errorMessage')) {
        errorElement.classList.add('showError');
    }
}