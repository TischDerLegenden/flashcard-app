const root = document.querySelector(":root");

// if (!colorSelector.value) colorSelector.value = "#0b1228";

function resetColorTheme() {   
    colorSelector1.value = "#0b1228";
    colorSelector2.value = "#0b1228"; 
    changeTheme(1);
}

function changeTheme(colorSelectorNumber) {

    if (colorSelectorNumber == 1) {
        color = colorSelector1.value;
    } else if (colorSelectorNumber == 2) {
        color = colorSelector2.value;
    } else {
        color = JSON.parse(localStorage.getItem("settings")).themeColor;
    }


    
    colorSelector1.value = color;
    colorSelector2.value = color;

    HSL = hexToHSL(color);
    console.log("set theme-color to: " + `hsl(${HSL.h}, ${HSL.s}%, ${HSL.l}%)`);

    if (HSL.l > 50) {
        root.style.setProperty(`--mainFontColor`, `#020202b3`);
        root.style.setProperty(`--secondFontColor`, `#101010`);
        root.style.setProperty(`--borderColor`, `rgba(0, 0, 0, 0.1)`);
    } else {
        root.style.setProperty(`--mainFontColor`, `#f9f9f9`);
        root.style.setProperty(`--secondFontColor`, `#fefff8b3`);
        root.style.setProperty(`--borderColor`, `rgba(255,255,255,0.05)`);
    }

    root.style.setProperty(`--backgroundColor`, `hsl(${HSL.h}, ${HSL.s}%, ${HSL.l}%)`);
    root.style.setProperty(`--elementColor`, `hsl(${HSL.h}, ${HSL.s}%, ${HSL.l+10}%)`);
    root.style.setProperty(`--elementColor2`, `hsl(${HSL.h}, ${HSL.s}%, ${HSL.l+20}%)`);
    saveSettings();
}

changeTheme(3);
