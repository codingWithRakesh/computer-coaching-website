const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");


// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
        nav.classList.remove("active");
    }
});


const functionAni = () =>{
    try{
        gsap.from(".item1",{
            y:100,
            opacity:0,
            delay:0.5,
            duration:0.9,
            stagger:0.3,
            zIndex:-3
        })
    }
    catch(error){
        console.log(error.message)
    }
}
functionAni()
const functioncontact = () =>{
   try{
     gsap.from(".container",{
        y:100,
        opacity:0,
        delay:0.5,
        duration:0.9,
        stagger:0.3,
        zIndex:-3
    })
   }
   catch(error){
    console.log(error.message)
   }
}
functioncontact()







