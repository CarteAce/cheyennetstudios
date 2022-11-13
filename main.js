document.getElementById("second-slice-cafe-btn").addEventListener("mouseover", mouseOver);
function mouseOver() {
  document.getElementById("second-slice-cafe-img").style.display = "inline";
  document.getElementById("sustainability-victoria-img").style.display = "none";
  document.getElementById("myer-img").style.display = "none";
  document.getElementById("walks-wags-weather-img").style.display = "none";
  document.getElementById("project-img").style.display = "none";
}

document.getElementById("sustainability-victoria-btn").addEventListener("mouseover", susMouse);
function susMouse() {
  document.getElementById("second-slice-cafe-img").style.display = "none";
  document.getElementById("sustainability-victoria-img").style.display = "inline";
  document.getElementById("myer-img").style.display = "none";
  document.getElementById("walks-wags-weather-img").style.display = "none";  
  document.getElementById("project-img").style.display = "none";
}

document.getElementById("myer-btn").addEventListener("mouseover", myerMouse);
function myerMouse() {
  document.getElementById("second-slice-cafe-img").style.display = "none";
  document.getElementById("sustainability-victoria-img").style.display = "none";
  document.getElementById("myer-img").style.display = "inline";
  document.getElementById("walks-wags-weather-img").style.display = "none";
  document.getElementById("project-img").style.display = "none";

}

document.getElementById("walks-wags-weather-btn").addEventListener("mouseover", walksMouse);
function walksMouse() {
  document.getElementById("second-slice-cafe-img").style.display = "none";
  document.getElementById("sustainability-victoria-img").style.display = "none";
  document.getElementById("myer-img").style.display = "none";
  document.getElementById("walks-wags-weather-img").style.display = "inline";
  document.getElementById("walks-wags-weather-img").style.scale = "0.6";
  document.getElementById("project-img").style.display = "none";

}

document.getElementById("project-btn").addEventListener("mouseover", projectMouse);
function projectMouse() {
  document.getElementById("second-slice-cafe-img").style.display = "none";
  document.getElementById("sustainability-victoria-img").style.display = "none";
  document.getElementById("myer-img").style.display = "none";
  document.getElementById("walks-wags-weather-img").style.display = "none";
  document.getElementById("project-img").style.display = "inline";
}


const modal = document.querySelector("#modal");
const openModal = document.querySelector(".open-button");
const closeModal = document.querySelector(".close-button");

openModal.addEventListener("click", () => {
  modal.showModal();
});

closeModal.addEventListener("click", () => {
  modal.close();
});
