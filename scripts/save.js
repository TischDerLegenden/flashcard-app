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

    let data = textarea.value;

    try {
        
        JSON.parse(data);
        localStorage.setItem("inputJSON", textarea.value);
        alert("Successfully saved your input!");
    
    } catch (err) {
        alert(`Not valid JSON: ${err}`);
    }
}