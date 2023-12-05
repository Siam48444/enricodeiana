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
const Links = document.querySelectorAll(".project_links");
var Images = document.querySelectorAll(".project_images_PC");

Links[0].addEventListener("mouseenter", ()=> {
    Images[0].style.opacity = 1;
    Images[0].style.transform = "scale(1)";
});
Links[0].addEventListener("mouseleave", ()=> {
    Images[0].style.opacity = 0;
    Images[0].style.transform = "scale(0.5)";
});
Links[0].addEventListener("mousemove", Track_0);
function Track_0(event) {
    var W = Images[0].clientWidth;
    var H = Images[0].clientHeight;
    Images[0].style.translate = `${event.pageX - W / 2}px ${event.pageY - H / 2}px`;
};


Links[1].addEventListener("mouseenter", ()=> {
    Images[1].style.opacity = 1;
    Images[1].style.transform = "scale(1)";
});
Links[1].addEventListener("mouseleave", ()=> {
    Images[1].style.opacity = 0;
    Images[1].style.transform = "scale(0.5)";
});
Links[1].addEventListener("mousemove", Track_1);
function Track_1(event) {
    var W = Images[1].clientWidth;
    var H = Images[1].clientHeight;
    Images[1].style.translate = `${event.pageX - W / 2}px ${event.pageY - H / 2}px`;
};


Links[2].addEventListener("mouseenter", ()=> {
    Images[2].style.opacity = 1;
    Images[2].style.transform = "scale(1)";
});
Links[2].addEventListener("mouseleave", ()=> {
    Images[2].style.opacity = 0;
    Images[2].style.transform = "scale(0.5)";
});
Links[2].addEventListener("mousemove", Track_2);
function Track_2(event) {
    var W = Images[2].clientWidth;
    var H = Images[2].clientHeight;
    Images[2].style.translate = `${event.pageX - W / 2}px ${event.pageY - H / 2}px`;
};


Links[3].addEventListener("mouseenter", ()=> {
    Images[3].style.opacity = 1;
    Images[3].style.transform = "scale(1)";
});
Links[3].addEventListener("mouseleave", ()=> {
    Images[3].style.opacity = 0;
    Images[3].style.transform = "scale(0.5)";
});
Links[3].addEventListener("mousemove", Track_3);
function Track_3(event) {
    var W = Images[3].clientWidth;
    var H = Images[3].clientHeight;
    Images[3].style.translate = `${event.pageX - W / 2}px ${event.pageY - H / 2}px`;
};


Links[4].addEventListener("mouseenter", ()=> {
    Images[4].style.opacity = 1;
    Images[4].style.transform = "scale(1)";
});
Links[4].addEventListener("mouseleave", ()=> {
    Images[4].style.opacity = 0;
    Images[4].style.transform = "scale(0.5)";
});
Links[4].addEventListener("mousemove", Track_4);
function Track_4(event) {
    var W = Images[4].clientWidth;
    var H = Images[4].clientHeight;
    Images[4].style.translate = `${event.pageX - W / 2}px ${event.pageY - H / 2}px`;
};


Links[5].addEventListener("mouseenter", ()=> {
    Images[5].style.opacity = 1;
    Images[5].style.transform = "scale(1)";
});
Links[5].addEventListener("mouseleave", ()=> {
    Images[5].style.opacity = 0;
    Images[5].style.transform = "scale(0.5)";
});
Links[5].addEventListener("mousemove", Track_5);
function Track_5(event) {
    var W = Images[5].clientWidth;
    var H = Images[5].clientHeight;
    Images[5].style.translate = `${event.pageX - W / 2}px ${event.pageY - H / 2}px`;
};


Links[6].addEventListener("mouseenter", ()=> {
    Images[6].style.opacity = 1;
    Images[6].style.transform = "scale(1)";
});
Links[6].addEventListener("mouseleave", ()=> {
    Images[6].style.opacity = 0;
    Images[6].style.transform = "scale(0.5)";
});
Links[6].addEventListener("mousemove", Track_6);
function Track_6(event) {
    var W = Images[6].clientWidth;
    var H = Images[6].clientHeight;
    Images[6].style.translate = `${event.pageX - W / 2}px ${event.pageY - H / 2}px`;
};