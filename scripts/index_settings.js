const font_size = document.getElementById("fontSize"); 
const font_weight = document.getElementById("fontWeight"); 
const colorSelector1 = document.getElementById("theme-color-selector1");
const colorSelector2 = document.getElementById("theme-color-selector2");

function updateFontSize() {
    flashcardDisplay.style.fontSize = font_size.value + "rem";
    saveSettings();
}
function updateFontWeight() {
    flashcardDisplay.style.fontWeight = font_weight.value * 100;
    saveSettings();
}

// saves the settings to localStorage
function saveSettings() {

    localStorage.setItem("settings", JSON.stringify({
        "fontSize": font_size.value,
        "fontWeight": font_weight.value,
        "skipAfterMark": skip_after_mark.checked,
        "themeColor": colorSelector1.value,
        "randomCardOrder": random_card_order.checked
    }));
}

// loads the settings from localStorage
function loadSettings() {

    // parse JSON string from localStorage
    let settings = JSON.parse(localStorage.getItem("settings"));

    // if the user is vsiting for the first time -> initially create the settings JSON string
    if (settings == null || settings == undefined) {
        localStorage.setItem("settings", JSON.stringify({
            "fontSize": 2,
            "fontWeight": 2,
            "skipAfterMark": true,
            "themeColor": "#0b1228",
            "randomCardOrder": true
        }));

        settings = JSON.parse(localStorage.getItem("settings"));
    }

    // set all of the inputs on the site to reflect the actual settings
    font_size.value = settings.fontSize;
    font_weight.value = settings.fontWeight;
    skip_after_mark.checked = settings.skipAfterMark;
    random_card_order.checked = settings.randomCardOrder;

    colorSelector1.value = settings.themeColor;
    colorSelector2.value = settings.themeColor;

    // update the font
    updateFontSize();
    updateFontWeight();
}
loadSettings();