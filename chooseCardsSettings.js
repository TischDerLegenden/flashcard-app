const colorSelector1 = document.getElementById("theme-color-selector1");
const colorSelector2 = document.getElementById("theme-color-selector2");

function saveSettings() {

    let settings = JSON.parse(localStorage.getItem("settings"));
    settings.themeColor = colorSelector1.value;
    localStorage.setItem("settings", JSON.stringify(settings));

}

function loadSettings() {    

    let settings = JSON.parse(localStorage.getItem("settings"));

    if (settings == null || settings == undefined) {
        localStorage.setItem("settings", JSON.stringify({"fontSize": 2,"fontWeight": 2, "skipAfterMark": true, "themeColor": "#0b1228"}));
        settings = JSON.parse(localStorage.getItem("settings"));
    }

    colorSelector1.value = settings.themeColor;
    colorSelector2.value = settings.themeColor;
}
loadSettings();