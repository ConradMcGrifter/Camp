const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav__ul");

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
});
