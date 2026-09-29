// State Variables
let count = 0;
let highest = 0;
let lowest = 0;
let totalSteps = 0;

// DOM Elements
const counterValue = document.getElementById('counter-value');
const counterCircle = document.getElementById('counter-circle');
const statusText = document.getElementById('status-text');
const container = document.querySelector('.counter-container');

const highestDisplay = document.getElementById('highest-val');
const lowestDisplay = document.getElementById('lowest-val');
const totalStepsDisplay = document.getElementById('total-steps');

const btnIncrement = document.getElementById('btn-increment');
const btnDecrement = document.getElementById('btn-decrement');
const btnReset = document.getElementById('btn-reset');

// Function to update UI states based on counter value
function updateUI() {
    counterValue.textContent = count;

    // Manage Themes & Wave Colors
    if (count > 0) {
        container.classList.remove('state-negative');
        container.classList.add('state-positive');
        statusText.textContent = "Positive Zone";
    } else if (count < 0) {
        container.classList.remove('state-positive');
        container.classList.add('state-negative');
        statusText.textContent = "Negative Zone";
    } else {
        container.classList.remove('state-positive', 'state-negative');
        statusText.textContent = "Neutral Point";
    }

    // Dashboard Statistics Updates
    if (count > highest) highest = count;
    if (count < lowest) lowest = count;

    highestDisplay.textContent = highest;
    lowestDisplay.textContent = lowest;
    totalStepsDisplay.textContent = totalSteps;
}

// Event Listeners
btnIncrement.addEventListener('click', () => {
    count++;
    totalSteps++;
    updateUI();
});

btnDecrement.addEventListener('click', () => {
    count--;
    totalSteps++;
    updateUI();
});

btnReset.addEventListener('click', () => {
    count = 0;
    highest = 0;
    lowest = 0;
    totalSteps = 0;
    updateUI();
});

// Initial UI Setup Call
updateUI();
