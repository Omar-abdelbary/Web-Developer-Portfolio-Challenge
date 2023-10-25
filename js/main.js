//  toggle menu 

let list = document.querySelector("header nav ul") ; 
let icon = document.querySelector("header nav .toggle-menu i ") ; 
let toggle_menu = document.querySelector("header nav .toggle-menu") ; 

toggle_menu.addEventListener("click" , function () {
    icon.classList.toggle("fa-close") ; 
    list.classList.toggle("return-list")
}) ; 

//  end toggle menu 



//  owl-carousel 

$(document).ready(function(){
    $(".owl-carousel").owlCarousel({
        items : 3 ,
        margin : 15 , 
        dots :false ,
        nav : false ,
        loop : true , 
        autoplay : true , 
        autoplayTimeout : 2000 ,
        

    });
});

//  end owl-carousel 



//  button scroll-top 

let scroll_top = document.querySelector(".scroll-top") ; 

window.addEventListener("scroll" , function () {
    if (window.scrollY > 100) {
        scroll_top.classList.add("return-button")
    } else {
        scroll_top.classList.remove("return-button") ; 
    }
}) ; 

scroll_top.addEventListener("click" , function () {
    window.scrollTo({
        top : 0 , 
        behavior: "smooth" , 
    })
})
console.log(scroll_top);