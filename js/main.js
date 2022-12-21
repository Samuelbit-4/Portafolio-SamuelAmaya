console.log("HOLAA");
const btnMenu = document.querySelector(".material-symbols-outlined");
const header = document.querySelector("header");
const menuH = document.querySelector("ul");
let contador = 0;
btnMenu.addEventListener("click", (e) => {
  if (screen.width <= 425) {
    menuH.style.visibility = "visible";
    contador++;
    header.style.backgroundColor = "#898989";
    if (contador == 2) {
      menuH.style.visibility = "hidden";
      header.style.backgroundColor = "#131313";
      contador = 0;
    }
  } else if (screen.width > 425){
    menuH.style.visibility = "visible";
  }
});
