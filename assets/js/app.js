const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const html = document.querySelector("html");
const navLinks = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  nav.classList.toggle("open");
  html.classList.toggle("no-scroll");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    nav.classList.remove("open");
    html.classList.remove("no-scroll");
  });
});
