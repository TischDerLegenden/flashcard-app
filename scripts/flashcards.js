/*

handle all of the flashcard logic ->
-> loading cards from localStorage
-> handeling user input to flip cards ect.

*/

const remainingDisplay = document.getElementById("remainingDisplay");
const flashcardDisplay = document.getElementById("flashcard-display");
const flashcardDisplayInner = document.querySelector(".flashcard-display-inner");

const markUnknownButton = document.getElementById("markUnknownButton");
const markKnownButton = document.getElementById("markKnownButton");
const nextButton = document.getElementById("nextButton");
const flipButton = document.getElementById("flipButton");

// const openWithGoogle = document.getElementById("openWithGoogle");


const progressBar = document.querySelector(".progress");
const progressBarWidth = document.querySelector(".progress-bar").offsetWidth;

const skip_after_mark = document.getElementById("skipAfterMark"); 

let cardIndex = 0;
let cardSide = "front";

let correctCardsAmount = 0;
let incorrectCardsAmount = 0;

let incorrectCards = [];

let CARDS = JSON.parse(localStorage.getItem("inputJSON"));


let length = CARDS.length


function displayCard() {
    flashcardDisplay.textContent = CARDS[cardIndex].front;
    // openWithGoogle.href = `https://translate.google.com/?sl=auto&tl=en&text=${encodeURIComponent(CARDS[cardIndex].front)}&op=translate`;
}

function prev() {

    cardIndex -= 1;
    cardSide = "front";
    markUnknownButton.classList.remove("button");
    markUnknownButton.classList.add("button-hollow");
    markKnownButton.classList.remove("button");
    markKnownButton.classList.add("button-hollow");
    flipButton.classList.add("button");
    flipButton.classList.remove("button-hollow");
    progressBar.style.width = `${(cardIndex / length) * progressBarWidth}px`
    remainingDisplay.textContent = `${cardIndex} / ${length}`
    displayCard();
}
function flip() {
    cardSide = "back";
    flashcardDisplay.textContent = CARDS[cardIndex].back
    markUnknownButton.classList.remove("button-hollow");
    markUnknownButton.classList.add("button");
    markKnownButton.classList.remove("button-hollow");
    markKnownButton.classList.add("button");
    flipButton.classList.remove("button");
    flipButton.classList.add("button-hollow");

}
function flipGeneral() {
    if (cardSide == "front") {
        cardSide = "back";
        flashcardDisplay.textContent = CARDS[cardIndex].back
    } else {
        cardSide = "front";
        flashcardDisplay.textContent = CARDS[cardIndex].front
    }
    
}
function next() {
    if (cardIndex + 1 < length) {
        cardIndex += 1;
        
    } else {
        remainingDisplay.textContent = `${length} / ${length}`
        progressBar.style.width = `${progressBarWidth}px`
        nextButton.classList.add("button-hollow");
        nextButton.classList.remove("button");

        flashcardDisplay.textContent = "last card reached";
        return;
    }
    cardSide = "front";
    markUnknownButton.classList.remove("button");
    markUnknownButton.classList.add("button-hollow");
    markKnownButton.classList.remove("button");
    markKnownButton.classList.add("button-hollow");
    flipButton.classList.add("button");
    flipButton.classList.remove("button-hollow");
    progressBar.style.width = `${(cardIndex / length) * progressBarWidth}px`
    nextButton.classList.add("button-hollow");
    nextButton.classList.remove("button");
    remainingDisplay.textContent = `${cardIndex} / ${length}`
    displayCard();
    updateCharts()
}

function mark(isCorrect) {
    if (isCorrect) {
        correctCardsAmount++;
    } else {
        incorrectCardsAmount++;
        incorrectCards.push(CARDS[cardIndex]);
    }

    markUnknownButton.classList.remove("button");
    markUnknownButton.classList.add("button-hollow");
    markKnownButton.classList.remove("button");
    markKnownButton.classList.add("button-hollow");
    nextButton.classList.remove("button-hollow");
    nextButton.classList.add("button");

    if (skip_after_mark.checked) {
        next()
    }
}

function copyIncorrect() {
    if (incorrectCards == [] || incorrectCards == null) {
        alert("(!) No incorrect cards found")
        return;
    }
    navigator.clipboard.writeText(JSON.stringify(incorrectCards, null, 2));
    alert("Copied incorrect cards to clipboard.");
}

function downloadIncorrectCards() {

    if (incorrectCards == [] || incorrectCards == null) {
        alert("(!) No incorrect cards found")
        return;
    }


    const data = JSON.stringify(incorrectCards, null, 2);     // convert object to text
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "flashcard_app_incorrect_cards.json";                     // filename
    a.click();

    URL.revokeObjectURL(url);

    alert("Your incorrect cards should be downloading!")

}

function reviewIncorrectCards() {
    cardIndex = 0;
    cardSide = "front";

    correctCardsAmount = 0;
    incorrectCardsAmount = 0;


    CARDS = incorrectCards;


    length = incorrectCards.length;

    incorrectCards = [];

    progressBar.style.width = `${(cardIndex / length) * progressBarWidth}px`;
    remainingDisplay.textContent = `${cardIndex} / ${length}`;
    displayCard()
}



function main() {
    
    if (CARDS === null || CARDS === undefined) {
        flashcardDisplay.textContent = "No JSON found";
        return;
    }
    remainingDisplay.textContent = `${cardIndex} / ${length}`;
    displayCard();
}

main();