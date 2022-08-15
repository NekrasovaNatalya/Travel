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