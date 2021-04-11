const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav__ul");

//toggle drop down menu
hamburger.addEventListener("click", show);

function show() {
    navUl.classList.toggle("show");
}

//rotates the hamburger on click
hamburger.addEventListener("click", animation);

function animation() {
    // hamburger.style.animation = "transitionIn 1s";.
    hamburger.classList.toggle("rotate");
    // hamburger.style.rotate = "90deg";
}
