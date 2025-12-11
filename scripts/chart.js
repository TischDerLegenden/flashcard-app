/*
draws the chart of correct and incorrect 
*/


const chartIncorrect = document.querySelector(".chart-incorrect");
const chartCorrect = document.querySelector(".chart-correct");
const chartHeight = document.querySelector(".chart-back").offsetHeight;

const labelCorrect = document.querySelector(".label-correct");
const labelIncorrect = document.querySelector(".label-incorrect");

function updateCharts() {

    labelCorrect.textContent = `correct (${Math.round(correctCardsAmount / cardIndex * 100)}%)`;
    labelIncorrect.textContent = `incorrect (${Math.round(incorrectCardsAmount / cardIndex * 100)}%)`;

    chartCorrect.style.height = `${(correctCardsAmount / cardIndex) * 100}%`;
    chartIncorrect.style.height = `${(incorrectCardsAmount / cardIndex) * 100}%`;
}
