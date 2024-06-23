const popup = document.querySelector('.popup');
const hireBtn = document.querySelector('.btnHire-popup');
const iconClose = document.querySelector('.icon-close');
const submit = document.querySelector('.submit');

hireBtn.addEventListener('click', () => {
    popup.classList.add('active-popup');
});

iconClose.addEventListener('click', () => {
    popup.classList.remove('active-popup');
});

submit.addEventListener('click', () => {
  popup.classList.remove('active-popup');
});

// auto type starts here
// let typed = new typed('.auto-type', {
//   String: ["Web Developer", "Graphic Designer", "Video Editor"],
//   typeSpeed: 120,
//   backSpeed: 120,
//   loop: true
// });