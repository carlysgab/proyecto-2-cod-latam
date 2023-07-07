const menuIcon = document.getElementById("menu-icon");
const menuNav = document.getElementById("menu-nav");

menuIcon.addEventListener("click", function () {
  menuNav.classList.toggle("active");
});

const modoOscuro = document.getElementById("modo-oscuro");
const body = document.body;

modoOscuro.addEventListener("click", function () {
  body.classList.toggle("dark-mode");
});

document.getElementById("imagen-1").addEventListener("mouseover", changeimage);
document
  .getElementById("imagen-1")
  .addEventListener("mouseleave", changeimage2);

function changeimage() {
  var image = (document.getElementById("imagen-1").src = "img/flor.jpeg");
}
function changeimage2() {
  var image = (document.getElementById("imagen-1").src = "img/carla.jpg");
}
