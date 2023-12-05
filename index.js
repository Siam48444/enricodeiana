// Hamburger button clicking.
const BurgerBtn = document.querySelector(".hamburger");
const BurgerLineOne  = BurgerBtn.querySelector(".line_one");
const BurgerLineTwo  = BurgerBtn.querySelector(".line_two");
const Menu = document.querySelector(".menu");

BurgerBtn.addEventListener("click", ()=> { 
    BurgerLineOne.classList.toggle("lines_one_active");
    BurgerLineTwo.classList.toggle("lines_two_active");
    
    Menu.classList.toggle("menu_open");
});