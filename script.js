//event Listener
document
    .getElementById("madlib__button")
    .addEventListener("click", buildMadLib);

const elem = document.getElementById("madlib__h2");
const elem2 = document.getElementById("return-link");
const madlibButton = document.getElementById("madlib__button");

//event Function
function buildMadLib() {
    //input
    let tool = document.getElementById("tool").value;
    let adjective = document.getElementById("adjective").value;
    let place = document.getElementById("place").value;
    let noun = document.getElementById("noun").value;
    let food = document.getElementById("food").value;
    let pluralNoun = document.getElementById("plural-noun").value;

    if (
        noun == "" ||
        adjective == "" ||
        tool == "" ||
        place == "" ||
        food == "" ||
        pluralNoun == ""
    ) {
        // let result = "Please fill out the madlib to read about our history";

        madlibButton.href = "#";
        alert("please fill out the madlib");
        // elem.style.display = "none";
        // elem2.style.display = "none";
        // document.getElementById("madlib__result").innerHTML = result;
    } else {
        madlibButton.href = "#results-wrap";
        let result =
            "Camp Crocodile Rock was founded in 2018 by Sam Ethan and Peter. These " +
            adjective +
            " explorers came from " +
            place +
            " with one goal...To make the best camp the world has ever seen. Equipped with only a couple fishing rods, an axe, and a " +
            tool +
            ", they were able to construct a small shelter and gather enough " +
            food +
            " to live comfortably. Over the years the camp has only gotten stronger, and it is now responsible for the entire economy of Center Sandwich. If you are coming to visit the camp, " +
            pluralNoun +
            " will be provided but you must bring your own " +
            noun +
            ".";

        //output
        elem.style.display = "block";
        elem2.style.display = "block";
        document.getElementById("madlib__result").innerHTML = result;
    }
}

//nav bar
