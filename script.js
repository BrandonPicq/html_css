const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarActions = document.querySelector(".navbar-actions");

navbarToggle.addEventListener("click", function () {
  navbarMenu.classList.toggle("active");
  navbarActions.classList.toggle("active");
  navbarToggle.classList.toggle("active");
});

const navbarLinks = document.querySelectorAll(".navbar-link");
navbarLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbarMenu.classList.remove("active");
    navbarActions.classList.remove("active");
    navbarToggle.classList.remove("active");
  });
});
