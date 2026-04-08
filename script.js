const menuToggle = document.getElementById("menuToggle")
const mobileMenu = document.getElementById("mobileMenu")

if(menuToggle){

menuToggle.addEventListener("click",()=>{

mobileMenu.classList.toggle("open")

})

}
