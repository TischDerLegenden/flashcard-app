// handles the logic of the burger menu,
// which appears when the user is on a smaller screen 
const burgerMenuOpen = document.querySelector(".burger-menu-open");
const cover = document.querySelector(".burger-menu-open-cover");

// openes the burger menu
function openBurgerMenu() {
    burgerMenuOpen.style.display = "flex";
    cover.style.display = "flex";
}

// closes the burger menu
function closeBurgerMenu() {
    burgerMenuOpen.style.display = "none";
    cover.style.display = "none";
}