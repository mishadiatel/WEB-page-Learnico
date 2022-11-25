let list = document.querySelectorAll('.footer__list');
let listTitle = document.querySelectorAll('.footer__pages-title');
let allLists = document.querySelector('.footer__lists');
let beforeHeader = document.querySelector('.beforeheader');
let closeIcon = document.querySelector('.close-icon');
let burger = document.querySelector('.burger');
let burgerUse = document.querySelector('.burger use');
let headerList = document.querySelector('.header__list');



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
    
    