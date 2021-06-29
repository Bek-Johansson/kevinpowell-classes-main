const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");
navToggleaddEventListener("click", () => {
  nav.classList.toggle("nav--visible");
});
