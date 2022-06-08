// -----------------------------EXPORT---------------------------------------

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
// -----------------------------FUNCTIONS---------------------------------------

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeColor() {
    addColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    startBtn.disabled = true;
    stopBtn.disabled = false;
}

function stopChangeColor() {
    clearInterval(addColor);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
// -----------------------------EVENTS---------------------------------------

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);
