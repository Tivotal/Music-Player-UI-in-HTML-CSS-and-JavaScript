/* Created by Tivotal */

let modBtn = document.querySelector(".mode");
let body = document.querySelector("body");

modBtn.addEventListener("click", () => {
  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    modBtn.querySelector("i").className = "fas fa-sun";
  } else {
    modBtn.querySelector("i").className = "fas fa-moon";
  }
});
