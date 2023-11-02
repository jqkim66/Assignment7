let interval;
let elapsedTime = 0;
let intervalvalid = true;

const updateTimeDisplay = () => {
    const hours = Math.floor(elapsedTime / 3600);
    const minutes = Math.floor((elapsedTime % 3600) / 60);
    const seconds = elapsedTime % 60;

    const time = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.getElementById('timeDisplay').textContent = time;
};

const startTimer = async () => {

    return new Promise((resolve) => {
        if (intervalvalid) {
            interval = setInterval(() => {
                elapsedTime++;
                updateTimeDisplay();
            }, 1000);
            intervalvalid = false;

        }

        document.getElementById('stopBtn').addEventListener('click', () => {
            clearInterval(interval);
            intervalvalid = true;
            resolve();
        });
    });
};

document.getElementById('startBtn').addEventListener('click', async () => {
    await startTimer();
});

document.getElementById('resetBtn').addEventListener('click', () => {
    elapsedTime = 0;
    clearInterval(interval);
    updateTimeDisplay();
    intervalvalid = true;
});
// Prevent any keyboard input
document.getElementById('datePicker').addEventListener('keydown', function (event) {
    event.preventDefault();
});
// Set the date picker to the current date
const currentDate = new Date().toISOString().slice(0, 10);
document.getElementById('datePicker').value = currentDate;
