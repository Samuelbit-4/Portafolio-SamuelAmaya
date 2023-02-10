console.log("HOLAA");
const btnMenu = document.querySelector(".material-symbols-outlined");
const header = document.querySelector("header");
const menuH = document.querySelector("ul");
let contador = 0;
btnMenu.addEventListener("click", (e) => {
    menuH.style.visibility = "visible";
    contador++;
    header.style.backgroundColor = "#898989";
    if (contador == 2) {
      menuH.style.visibility = "hidden";
      header.style.backgroundColor = "#131313";
      contador = 0;
    }
});
window.scroll({
  top: offsetTop,
  behavior: "smooth"
})

const scrolling = (scroll) =>{

}

window.addEventListener("scroll", e =>{
  
})