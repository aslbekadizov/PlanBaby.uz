window.addEventListener('load', function(e){
    var header_title_right = document.querySelector(".header_title_right img") 
    var frame = document.querySelector(".frame")

    header_title_right.addEventListener('click', function(){
        frame.style.display = 'inline-flex'
    })
})