const burger = document.querySelector('.burger') ;
const menu   = document.querySelector('.menu') ;
const nav    = document.querySelector('.container nav') ;
const links  = document.querySelectorAll('.menu li') ;
const cen   = document.querySelector('.centered') ;




burger.addEventListener("click" ,  function show(){
      //menu toggle

      menu.classList.toggle('menu-active') ;
        
      // burgr Toggle

      burger.classList.toggle('active') ;

      // lis animation 

      links.forEach(function(link , i){
        if(link.style.animation ){
          link.style.animation = "" ;
        }else{
          links[i].style.animation = "movin 1s ease forwards "+i/5 +"s" ;
        }
      });    
        cen.classList.toggle('shorted') ;
});


function change (){ 
  var y = window.pageYOffset;
  if( y > 75){
    nav.style.background = "black" ;
    nav.style.width = "100%" ;
    nav.style.height = "10vh" ;
    nav.style.transform = "translate(0%)" ;
    nav.style.transition = "0.5s" ;
    burger.style.display = "hidden" ;

    
  }else{
    nav.style.background = "" ;
    nav.style.width = "" ;
    nav.style.height = "" ;
    nav.style.transform = "" ;
    nav.style.transition = "0.4s" ;
    burger.style.display = "" ;  }
}; 

window.addEventListener('scroll' , change) ;

