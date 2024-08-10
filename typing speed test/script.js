let startTime;
let endTime;

const sentences = [
    "The quick brown fox jumps over the lazy dog.",
    "A journey of a thousand miles begins with a single step.",
    "To be or not to be, that is the question.",
    "All that glitters is not gold.",
    "She sells seashells by the seashore."
];

const typingTextElement = document.getElementById('typing-text');
const userInput = document.getElementById('user-input');
const resultDisplay = document.getElementById('result');

// Function to select a random sentence
function getRandomSentence() {
    const randomIndex = Math.floor(Math.random() * sentences.length);
    return sentences[randomIndex];
}

// Set the test sentence when the page loads
const typingText = getRandomSentence();
typingTextElement.innerText = typingText;

// Function to start the timer
function startTimer() {
    startTime = new Date().getTime();
}

// Function to end the timer and calculate WPM
function endTimer() {
    endTime = new Date().getTime();
    const timeDiff = (endTime - startTime) / 1000; // time in seconds
    const words = typingText.split(' ').length;
    const minutes = timeDiff / 60;
    const wpm = Math.round(words / minutes);
    resultDisplay.innerText = `Your typing speed is ${wpm} WPM`;
}

// Event listener to start the timer when typing starts
userInput.addEventListener('keydown', function(e) {
    if (userInput.value.length === 0) {
        startTimer();
    }
});

// Event listener to check when typing is complete
userInput.addEventListener('keyup', function(e) {
    if (userInput.value === typingText) {
        endTimer();
    }
});
