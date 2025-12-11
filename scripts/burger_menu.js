const burgerMenuOpen = document.querySelector(".burger-menu-open");
const cover = document.querySelector(".burger-menu-open-cover");

function openBurgerMenu() {
    burgerMenuOpen.style.display = "flex";
    cover.style.display = "flex";
}

function closeBurgerMenu() {
    burgerMenuOpen.style.display = "none";
    cover.style.display = "none";
}