"use strict";

const navMenuIcon = document.querySelector(".nav__menuIcon");
const navLinks = document.querySelector(".nav__links");

console.log(navLinks);

navMenuIcon.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});
