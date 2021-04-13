const hamburger = document.getElementById("hamburger");
const navUl = document.getElementById("nav__ul");
const darken = document.getElementById("darken");

//toggle drop down menu
hamburger.addEventListener("click", show);

function show() {
    // navUl.style.transform.translateY = "-20";
    navUl.classList.toggle("show");
    darken.classList.toggle("darken");
}

//rotates the hamburger on click
hamburger.addEventListener("click", animation);

function animation() {
    // hamburger.style.animation = "transitionIn 1s";.
    // hamburger.classList.toggle("rotate");

    // hamburger.style.rotate = "90deg";



    if(!hamburger.classList.contains("rotate")) {
        
        hamburger.classList.remove("reverse");
        hamburger.classList.add("rotate");

    } else if (hamburger.classList.contains("rotate")) {
        
        hamburger.classList.remove("rotate");
        hamburger.classList.add("reverse");
    }
}
