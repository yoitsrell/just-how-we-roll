// Initialization

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;

function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollD6);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollDoubleD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollDoubleD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollD12);
    
    const d20Roll = document.querySelector('#d20-roll');
    d20Roll.addEventListener('click', rollD20);

    const resetButton = document.querySelector('#reset-button')
    resetButton.addEventListener('click', resetAllRolls);

    setStartingImages();
}

function setStartingImages() {
    const START_DIRECTORY = './images/start'
    const SIX_SIDED_START_IMAGE = `${START_DIRECTORY}/d6.png`;

    setSrc('#d6-roll', SIX_SIDED_START_IMAGE);
    setSrc('#double-d6-roll-1', SIX_SIDED_START_IMAGE);
    setSrc('#double-d6-roll-2', SIX_SIDED_START_IMAGE);
    setSrc('#d12-roll', `${START_DIRECTORY}/d12.jpeg`)
    setSrc('#d20-roll', `${START_DIRECTORY}/d20.jpg`);
}

// Roll functions

function rollD6() {
    const rand = Math.random();
    const range = rand * 6;
    const roll = Math.ceil(range);
    sixes.push(roll);

    const mean = getMean(sixes);
    const median = getMedian(sixes);
    const meanSection = document.querySelector('#d6-rolls-mean')
    meanSection.innerText = mean;
    const medianSection = document.querySelector('#d6-rolls-median');
    medianSection.innerText = median;
    
    const rollSrc = getSixSidedDieImage(roll);
    const rollImage = document.querySelector('#d6-roll');
    rollImage.src = rollSrc;
}

function rollDoubleD6() {
    const roll1 = getRandomNumber(6);
    const roll2 = getRandomNumber(6);
    const roll = roll1 + roll2;
    doubleSixes.push(roll);

    const mean = getMean(doubleSixes);
    const median = getMedian(doubleSixes);
    placeText('#d6-rolls-mean', mean);
    placeText('#d6-rolls-median', median);

    const rollImage1 = getSixSidedDieImage(roll1);
    const rollImage2 = getSixSidedDieImage(roll2);
    setSrc('#double-d6-roll-1', rollImage1);
    setSrc('#double-d6-roll-2', rollImage2);
}

function rollD12() {
    const roll = getRandomNumber(12);
    twelves.push(roll);

    const mean = getMean(twelves);
    const median = getMedian(twelves);
    placeText('#d12-rolls-mean', mean);
    placeText('#d12-rolls-median', median);

    const rollImage = getNumberImage(roll);
    setSrc('#d12-roll', rollImage);
}

function rollD20() {
    const roll = getRandomNumber(20);
    twenties.push(roll);

    const mean = getMean(twenties);
    const median = getMedian(twenties);
    placeText('#d20-rolls-mean', mean);
    placeText('#d20-rolls-median', median);

    const rollImage = getNumberImage(roll);
    setSrc('#d20-roll', rollImage);
}

// Math Section

function getRandomNumber(max) {
    const rand = Math.random();
    const range = rand * max;
    const result = Math.ceil(range);
    
    return result;
}

function getMean(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    
    const mean = (sum / arr.length).toFixed(2);
    
    return mean;
}

function getMedian(arr) {
    const sorted = arr.sort();
    const middleIndex = Math.floor(sorted.length / 2);
    
    return sorted[middleIndex];
}

function getMostCommonRoll(rolls) {
    const counts = [];
    for (let i = 0; i < rolls.length; i++) {
        const currentRoll = rolls[i];
        if (!counts[currentRoll]) {
            counts[currentRoll] = 1;
        } else {
            counts[currentRoll] = counts[currentRoll] + 1;
        }
    }
    
    let mostCommonRoll = 0;
    let highestCount = 0;
    for(let i = 0; i < counts.length; i++) {
        const currentCount = counts[i];
        if(currentCount && currentCount > highestCount) {
            highestCount = currentCount;
            mostCommonRoll = i;
        }
    }
    
    return mostCommonRoll;
}

function resetAllRolls() {
    sixes.splice(0);
    doubleSixes.splice(0);
    twelves.splice(0);
    twenties.splice(0);

    setStartingImages();
}

// Dom helper functions

function getSixSidedDieImage(roll) {
    return `/images/d6/${roll}.png`;
}

function getNumberImage(roll) {
    return `/images/numbers/${roll}.png`;
}

// Particularly good place for an arrow function instead:
// const getSixSidedDieImage = (roll) => `/images/d6/{roll}.png`

function setSrc(selector, uri) {
    document.querySelector(selector).src = uri;
}

function placeText(selector, text) {
    document.querySelector(selector).innerText = text;
}

function addClick(selector, func) {
    document.querySelector(selector)
        .addEventListener('click', func);
}