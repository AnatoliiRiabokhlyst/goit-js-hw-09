// -----------------------------EXPORT---------------------------------------

const body = document.querySelector('body');
const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
// -----------------------------FUNCTIONS---------------------------------------

function getRandomHexColor() {
return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
stopBtn.disabled = true;
function changeColor() {
    addColor = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, 1000);
    stopBtn.disabled = false;
    startBtn.disabled = true;
}

function stopChangeColor() {
    clearInterval(addColor);
    startBtn.disabled = false;
    stopBtn.disabled = true;
}
// -----------------------------EVENTS---------------------------------------

startBtn.addEventListener('click', changeColor);
stopBtn.addEventListener('click', stopChangeColor);
