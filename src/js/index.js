const $logo = document.querySelector("#logo");
const $toggleMode = document.querySelector("#toggle-mode ion-icon");
const $toggleBtn = document.querySelector(".toggle-btn-mode");
const $body = document.body;
const $navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
const $navbarNav = document.querySelector(".navbar__nav");

if (localStorage.getItem("logo") && localStorage.getItem("dark")) {
  let darked = JSON.parse(localStorage.getItem("dark"));
  $logo.src = localStorage.getItem("logo");

  if (darked.value) {
    $body.classList.add("dark-theme");
    $toggleMode.name = "sunny-outline";
  }
  else{
      $body.classList.remove("dark-theme");
      $toggleMode.name = "moon-outline";
  }
}

function myFunction() {
  let dark = localStorage.getItem("dark")
    ? JSON.parse(localStorage.getItem("dark"))
    : { value: false };

  let suff = "";

  if (!dark.value) {
    suff = "_dark";
    $body.classList.add("dark-theme");
    $toggleMode.name = "sunny-outline";
  }
  else{
      $body.classList.remove("dark-theme");
      $toggleMode.name = "moon-outline";
  }

  localStorage.setItem("logo", `./src/img/frani_logo${suff}.svg`);
  $logo.src = localStorage.getItem("logo");
  dark.value = !dark.value;
  localStorage.setItem("dark", JSON.stringify(dark));

  $toggleBtn.classList.add("active");
  setTimeout(() => {
      $toggleBtn.classList.remove("active"); 
  }, 1000);
}
const $navBarToggleFunc = function () {
    $navbarToggleBtn.classList.toggle("active");
    $navbarNav.classList.toggle("active");
}
$navbarToggleBtn.addEventListener("click", $navBarToggleFunc);

document.querySelectorAll(".nav-link").forEach(e => e.addEventListener("click", () => {
  $navbarToggleBtn.classList.remove("active");
  $navbarNav.classList.remove("active");
} ))