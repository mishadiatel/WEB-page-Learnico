import { elObserver } from "./makeAnimation.js";

const list = document.querySelectorAll('.footer__list');
const listTitle = document.querySelectorAll('.footer__pages-title');
const allLists = document.querySelector('.footer__lists');
const beforeHeader = document.querySelector('.beforeheader');
const closeIcon = document.querySelector('.close-icon');
const burger = document.querySelector('.burger');
const burgerUse = document.querySelector('.burger use');
const headerList = document.querySelector('.header__list');
const btnSignUp = document.querySelector('.header__right-signup');
const popupSignUp = document.querySelector('.popup-signup');
const popupClose = document.querySelector('.popup-signup__close');
const body = document.querySelector('body');
const animationElements = document.querySelectorAll('[data-animation]');




listTitle.forEach((element, index)=>{
    element.addEventListener('click', function(event){
        list[index].classList.toggle('active-list');
    });
});

closeIcon.addEventListener('click', function(event){
    beforeHeader.classList.toggle('closed');
});

burger.addEventListener('click', function(event){
    headerList.classList.toggle('active-header-list');
    if(headerList.classList.contains('active-header-list')){
        burgerUse.setAttribute("href", "./src/images/svg/sprite/sprite.svg#close");
    }else{
        burgerUse.setAttribute("href", "./src/images/svg/sprite/sprite.svg#burger");
    }
});
    
  

btnSignUp.addEventListener('click', function(event){
    event.preventDefault();
    popupSignUp.classList.add('active-signup');
    body.classList.add('not-scroll');
});
popupClose.addEventListener('click', function(event){
    popupSignUp.classList.remove('active-signup');
    body.classList.remove('not-scroll');
    
});
// const scrollIsDown = function(){
//     let last_known_scroll_position = 0;

//     window.addEventListener('scroll', function(e) {
//         let current_scroll_position = window.scrollY;

//         if (current_scroll_position > last_known_scroll_position) {
//             // console.log("Scrolled down");
//             return true;
//         } else {
//             return false;
//             // console.log("Scrolled up");
//         }
//         last_known_scroll_position = current_scroll_position;
//     });
// }

animationElements.forEach(el => elObserver.observe(el));


