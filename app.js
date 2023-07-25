const menuToggle = document.querySelector('.menu');
const openMenu = document.querySelector('nav');
menuToggle.onclick = () => {
    menuToggle.classList.toggle('active');
    openMenu.classList.toggle('active');
}

console.log(window.location);