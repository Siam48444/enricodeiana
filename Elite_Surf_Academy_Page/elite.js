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



// Project hovering.
const Link = document.querySelector(".project_link");
var Image = document.querySelector(".project_images_PC");

Link.addEventListener("mouseenter", ()=> {
    Image.style.opacity = 1;
    Image.style.transform = "scale(1)";
});
Link.addEventListener("mouseleave", ()=> {
    Image.style.opacity = 0;
    Image.style.transform = "scale(0.5)";
});
Link.addEventListener("mousemove", Track);
function Track(event) {
    var W = Image.clientWidth;
    var H = Image.clientHeight;
    Image.style.translate = `${event.pageX - W / 2}px ${event.pageY - H / 2}px`;
};