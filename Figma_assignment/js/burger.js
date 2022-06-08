const menuBtn = document.querySelector(".menu-btn");
let menuOpen = false;
const overlayMenu = document.querySelector(".overlay-menu");

menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    menuOpen = true;
    document.getElementById("overlay").style.display = "block";
  } else {
    menuBtn.classList.remove("open");
    menuOpen = false;
    document.getElementById("overlay").style.display = "none";
  }
});

overlayMenu.addEventListener("click", () => {
  menuBtn.classList.remove("open");
  menuOpen = false;
  document.getElementById("overlay").style.display = "none";
});

// function off(){
//     document.getElementById("overlay").style.display = "none";
// }
