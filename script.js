//event Listener
document
    .getElementById("madlib__button")
    .addEventListener("click", buildMadLib);

//event Function
function buildMadLib() {
    //input
    let year = document.getElementById("year").value;
    let adjective = document.getElementById("adjective").value;
    let place = document.getElementById("place").value;
    let object = document.getElementById("object").value;
    let food = document.getElementById("food").value;
    let noun = document.getElementById("noun").value;

    //process
    let result =
        "Camp Crocodile Rock was founded in " +
        year +
        " by Sam Ethan and Peter. These " +
        adjective +
        " explorers came from " +
        place +
        " with one goal...To make the best camp the world has ever seen. Equipped with only a couple fishing rods, axes and a " +
        object +
        ", they were able to construct a small shelter and gather enough " +
        food +
        " to live comfortably. After building up the camp over the years, it is now responsible for the entire economy of Center Sandwich. If you are coming to visit the camp, meals will be provided but you must bring your own " +
        noun +
        ".";
    //output
    document.getElementById("madlib__result").innerHTML = result;
}
