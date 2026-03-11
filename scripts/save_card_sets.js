// handles the logic for the saving multiple sets of cards for later in input.index
// uses localStorage


const nameInput = document.getElementById("saved-cards-name-input");

// Check if local storage has already been initialized
// If is the case, continue, else, set up ![ savedCardSets ]!
function loadCardSets() {
    let sets = JSON.parse(localStorage.getItem("savedCardSets"));

    // if the user is visiting for the first time -> initially create the settings JSON string
    if (sets == null || sets == undefined) {
        localStorage.setItem("savedCardSets", JSON.stringify([
            {"name": "example", "cardData": `
                [
                    {
                        'front': 'Hello',
                        'back': 'Hola'
                    },
                    {
                        'front': 'Thank you',
                        'back': 'Gracias'
                    },
                    {
                        'front': 'Apple',
                        'back': 'Manzana'
                    }
                ]
            `}
        ]));

        sets = JSON.parse(localStorage.getItem("savedCardSets"));
        console.log("[save_card_sets.js] [status] initialized savedCardSets in localStorage");
        return;
    }
    sets.forEach(card => {
        displayNewCardSet(card.name, card.cardData);
    });
    console.log("[save_card_sets.js] [status] successfully loaded all savedCardSets from localStorage");

}


// save one card set to local storage with the correct formatting
// saves a card set which is to be displayed in input.html
function saveCardSet() {

    let cardData = textarea.value.replace(/"/g, "'");
    let name = nameInput.value.trim().replace(/<\/>'"/g, '');

    // checking if parameters are set, else returning
    if (textarea.value.trim() == "") {
        alert("textarea is empty");
        return;
    }
    if (nameInput.value.trim() == "") {
        alert("name input is empty");
        return;
    }
    
    let sets = JSON.parse(localStorage.getItem("savedCardSets"));

    sets.push({"name": name, "cardData": cardData});+
    console.table(sets)
    localStorage.setItem("savedCardSets", JSON.stringify(sets));


    displayNewCardSet(name, cardData);
}

// deletes a card set based on the name given
function delCardSet(name) {
    let sets = JSON.parse(localStorage.getItem("savedCardSets"));

    sets = sets.filter(set => set.name !== name);
    localStorage.setItem("savedCardSets", JSON.stringify(sets));
}

// Creates a new card set in the browser for immediate use
function displayNewCardSet(name, cardData) {

    const listDiv = document.querySelector(".saved-cards-list");

    // Create cards to be displayed
    // Create the main container
    let newDiv = document.createElement("div");
    newDiv.classList.add("element2");

    // Create the delete-button
    let delButton = document.createElement("button");
    delButton.style.backgroundColor = "transparent";
    delButton.style.border = "none";
    delButton.onclick = () => {
        newDiv.remove();
        delCardSet(name);
    };

    // create an svg and append to the del button for style
    let img = document.createElement("img");
    img.src = "../images/bin.svg";

    delButton.appendChild(img);

    // load button loads the data to the textarea
    let loadButton = document.createElement("button");
    loadButton.classList.add("button");
    loadButton.textContent = "load";
    loadButton.onclick = () => {
        textarea.value = cardData.replace(/'/g, '"');
        saveJSON();
    };

    // title display
    let title = document.createElement("p");
    title.textContent = name;


    // Create button div for styling purposes
    let buttonDiv = document.createElement("div");

    // append
    newDiv.appendChild(title);

    buttonDiv.appendChild(delButton)
    buttonDiv.appendChild(loadButton)

    newDiv.appendChild(buttonDiv);


    listDiv.appendChild(newDiv);
}

loadCardSets();    
    
/* <div class="element2">
    <p>title</p>
    <button class="button">load</button>
    <button style="background-color: transparent; border: transparent;">
        <img src="../images/bin.svg" alt="">
    </button>
</div> */
