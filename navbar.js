const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav__ul");
const darken = document.getElementById("darken");

//toggle drop down menu
hamburger.addEventListener("click", show);

function show() {
    // navUl.style.transform.translateY = "-20";
    navUl.classList.toggle("show");
    darken.classList.toggle("darken");

    if (navUl.classList.contains("show")) {
        navUl.style.animation = "shortTransitionIn 0.5s";
    } else {
        navUl.style.animation = "";
    }
}

//rotates the hamburger on click
hamburger.addEventListener("click", animation);

function animation() {
    if (!hamburger.classList.contains("rotate")) {
        hamburger.classList.remove("reverse");
        hamburger.classList.add("rotate");
    } else if (hamburger.classList.contains("rotate")) {
        hamburger.classList.remove("rotate");
        hamburger.classList.add("reverse");
    }
}
