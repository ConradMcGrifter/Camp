//event Listener
document
    .getElementById("madlib__button")
    .addEventListener("click", buildMadLib);

//event Function
function buildMadLib() {
    //input
    let tool = document.getElementById("tool").value;
    let adjective = document.getElementById("adjective").value;
    let place = document.getElementById("place").value;
    let object = document.getElementById("object").value;
    let food = document.getElementById("food").value;
    let noun = document.getElementById("plural-noun").value;

    //process
    let result =
        "Camp Crocodile Rock was founded in 2018 by Sam Ethan and Peter. These " +
        adjective +
        " explorers came from " +
        place +
        " with one goal...To make the best camp the world has ever seen. Equipped with only a couple fishing rods, a " +
        tool +
        " and a " +
        object +
        ", they were able to construct a small shelter and gather enough " +
        food +
        " to live comfortably. Over the years the camp has only gotten stronger, and it is now responsible for the entire economy of Center Sandwich. If you are coming to visit the camp, meals will be provided but you must bring your own " +
        noun +
        ".";
    //output
    document.getElementById("madlib__result").innerHTML = result;
}
