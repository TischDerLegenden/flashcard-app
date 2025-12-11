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

function saveSettings() {

    localStorage.setItem("settings", JSON.stringify({
        "fontSize": font_size.value,
        "fontWeight": font_weight.value,
        "skipAfterMark": skip_after_mark.checked,
        "themeColor": colorSelector1.value
    }));    

}

function loadSettings() {
    let settings = JSON.parse(localStorage.getItem("settings"));

    console.table(settings);

    if (settings == null || settings == undefined) {
        localStorage.setItem("settings", JSON.stringify({"fontSize": 2,"fontWeight": 2, "skipAfterMark": true, "themeColor": "#0b1228"}));
        settings = JSON.parse(localStorage.getItem("settings"));
    }

    font_size.value = settings.fontSize;
    font_weight.value = settings.fontWeight;
    skip_after_mark.checked = settings.skipAfterMark;

    colorSelector1.value = settings.themeColor;
    colorSelector2.value = settings.themeColor;

    updateFontSize();
    updateFontWeight();
}
loadSettings();