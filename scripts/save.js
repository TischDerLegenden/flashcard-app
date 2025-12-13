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
        const parsed = JSON.parse(data);

        const isValid =
        Array.isArray(parsed) &&
        parsed.every(
            item =>
            typeof item === "object" &&
            item !== null &&
            typeof item.front === "string" &&
            typeof item.back === "string"
        );

        if (!isValid) {
            throw new Error("JSON must be an array of objects with 'front' and 'back' strings");
        }

        localStorage.setItem("inputJSON", data);
        alert("Successfully saved your input!");
    } catch (err) {
        alert(`Not valid JSON:\n\n${err.message}`);
    }
}
