//register window

const login = document.querySelector('.login'),
      register = document.querySelector('.register'),
      popup = document.querySelector('.pop-up'),
      popupOpen = document.querySelectorAll('.pop-up-button'),
      popupClose = document.querySelectorAll('.close-button'),
      loginbtn = document.querySelector('.login-button'),
      registerbtn = document.querySelector('.register-button')

function open() {
    popup.classList.add('show');
    popup.classList.remove('hide');
    login.classList.add('hide');
}

function close() {
    popup.classList.remove('show');
    popup.classList.add('hide');
}

popupOpen.forEach(btn => {
    btn.addEventListener('click', open);
});

popupClose.forEach(btn => {
    btn.addEventListener('click', close);
});

loginbtn.addEventListener('click', () => {
    login.classList.remove('show');
    login.classList.add('hide');
    register.classList.add('show');
    register.classList.remove('hide');
});

registerbtn.addEventListener('click', () => {
    register.classList.remove('show');
    register.classList.add('hide');
    login.classList.add('show');
    login.classList.remove('hide');
});

popup.addEventListener('click', (e) => {
    if (e.target === popup) {
        close();
    }
});

//slider

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}

function minusSlide() {
    showSlides(slideIndex -= 1);  
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("place-card");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}
