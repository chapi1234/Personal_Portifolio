function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon  = document.querySelector(".humburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}