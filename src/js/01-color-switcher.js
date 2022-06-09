// -----------------------------EXPORT---------------------------------------

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
// -----------------------------FUNCTIONS---------------------------------------

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
stopBtn.setAttribute("disabled", true);
function changeColor() {
    addColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    stopBtn.removeAttribute("disabled");
    startBtn.setAttribute("disabled", true);
}

function stopChangeColor() {
    clearInterval(addColor);
    startBtn.removeAttribute("disabled");
    stopBtn.setAttribute("disabled", true);
}
// -----------------------------EVENTS---------------------------------------

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);
