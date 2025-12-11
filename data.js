const chartIncorrect = document.querySelector(".chart-incorrect");
const chartCorrect = document.querySelector(".chart-correct");
const chartHeight = document.querySelector(".chart-back").offsetHeight;




const labelCorrect = document.querySelector(".label-correct");
const labelIncorrect = document.querySelector(".label-incorrect");


console.log("chart height: ", chartHeight)

function updateCharts() {
    console.log("cards updated");
    console.log("correct cards:" + correctCardsAmount);
    console.log("incorrect cards:" + incorrectCardsAmount);
    console.log("card index:" + cardIndex);

    labelCorrect.textContent = `correct (${Math.round(correctCardsAmount / cardIndex * 100)}%)`;
    labelIncorrect.textContent = `incorrect (${Math.round(incorrectCardsAmount / cardIndex * 100)}%)`;

    chartCorrect.style.height = `${(correctCardsAmount / cardIndex) * 100}%`;
    chartIncorrect.style.height = `${(incorrectCardsAmount / cardIndex) * 100}%`;
}
