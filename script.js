window.addEventListener('load', function(e){

//so'zni chiqishi

    let infoElements_p = document.querySelector(".info_elements p");
    let info_elements = document.querySelector(".info_elements")
    let word_p = infoElements_p.innerHTML;
    let i = 0;

    infoElements_p.innerHTML = '';
    
    info_elements.addEventListener('mouseover', function(){
        function print(){
            infoElements_p.innerHTML += word_p.charAt(i)
            i++
        }
        setInterval(print, 10)
    })
//so'z chiqishi tugadi

//Menu
let menu = document.querySelector('.fa-bars')
let close = document.querySelector('.fa-xmark')
let burger_menu = document.querySelector('.burger_menu')
let header_navbar = document.querySelector('.header_navbar')
let header_title = document.querySelector('.header_title')

menu.addEventListener('click', function () {
    burger_menu.style.left = '0px'
})
close.addEventListener('click', function(){
    burger_menu.style.left = '-290px'
})










    // var header_title_right = document.querySelector(".header_title_right img") 
    // var frame = document.querySelector(".frame")

    // header_title_right.addEventListener('click', function(){
    //     frame.style.display = 'inline-flex'
    // })
})