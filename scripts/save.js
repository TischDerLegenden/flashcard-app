const textarea = document.querySelector("textarea"); 

example = `
                [
                    {
                        "front": "Hello",
                        "back": "Hola"
                    },
                    {
                        "front": "Thank you",
                        "back": "Gracias"
                    },
                    {
                        "front": "Apple",
                        "back": "Manzana"
                    }
                ]
`



let CARDS = JSON.parse(localStorage.getItem("inputJSON"));
if (CARDS == null || CARDS == undefined) {
    textarea.value = example;
} else {
    textarea.value = JSON.stringify(CARDS, null, 2);
}

function saveJSON() {
    localStorage.setItem("inputJSON", textarea.value);
    alert("Successfully saves your input!");
    console.log("Successfully saved your input!");
    console.table(textarea.value);
}