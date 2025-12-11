const font_size = document.getElementById("fontSize"); 
const font_weight = document.getElementById("fontWeight"); 
const colorSelector = document.getElementById("theme-color-selector");


function updateFontSize() {
    flashcardDisplay.style.fontSize = font_size.value + "rem";
    saveSettings();
}
function updateFontWeight() {
    flashcardDisplay.style.fontWeight = font_weight.value * 100;
    saveSettings();
}

function saveSettings() {
    localStorage.setItem("settings", JSON.stringify({"fontSize": font_size.value,"fontWeight": font_weight.value, "skipAfterMark": skip_after_mark.checked, "themeColor": colorSelector.value}));
}
function loadSettings() {
    let settings = JSON.parse(localStorage.getItem("settings"));
    if (settings == null || settings == undefined) {
        localStorage.setItem("settings", JSON.stringify({"fontSize": 2,"fontWeight": 2, "skipAfterMark": true, "themeColor": "#0b1228"}));
    }
    font_size.value = settings.fontSize;
    font_weight.value = settings.fontWeight;
    skip_after_mark.checked = settings.skipAfterMark;
    colorSelector.value = settings.themeColor;

    updateFontSize()
    updateFontWeight()
}
loadSettings()