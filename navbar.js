const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav__ul");
const darken = document.getElementById("darken");
const showNav = document.getElementsByClassName("show");

//toggle drop down menu
hamburger.addEventListener("click", show);

function show() {
    // navUl.classList.toggle("show");
    // darken.classList.toggle("darken");

    // if (navUl.classList.contains("show")) {
    //     navUl.style.animation = "shortTransitionIn 0.5s";
    // }

    // if (!navUl.classList.contains("show")) {
    //     navUl.style.animation = "shortTransitionOut 0.5s";
    // }
    // if (!navUl.classList.contains("show")) {
    //     navUl.style.transform = "translateY(-20px)";
    // } else if (navUl.classList.contains("show")) {
    //     navUl.style.transform = "translateY(0px)";
    // }

    if (!navUl.classList.contains("show")) {
        navUl.classList.remove("hide");
        navUl.classList.add("show");
    } else if (navUl.classList.contains("show")) {
        navUl.classList.remove("show");
        navUl.classList.add("hide");
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
