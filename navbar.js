const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav__ul");

hamburger.addEventListener("click", () => {
    navUl.classList.toggle("show");
});

hamburger.addEventListener("click", animation);

function animation() {
    // hamburger.style.animation = "transitionIn 1s";.
    hamburger.classList.toggle("rotate");
    // hamburger.style.rotate = "90deg";
}
