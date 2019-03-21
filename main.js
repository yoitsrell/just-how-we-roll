// Initialization

const sixes = [];
const doubleSixes = [];
const twelves = [];
const twenties = [];

window.onload = init;

function init() {
    const d6Roll = document.querySelector('#d6-roll');
    d6Roll.addEventListener('click', rollSixSidedDie);

    const doubleD6Roll1 = document.querySelector('#double-d6-roll-1');
    doubleD6Roll1.addEventListener('click', rollD6);
    const doubleD6Roll2 = document.querySelector('#double-d6-roll-2');
    doubleD6Roll2.addEventListener('click', rollD6);

    const d12Roll = document.querySelector('#d12-roll');
    d12Roll.addEventListener('click', rollTwelveSidedDie);

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

function rollSixSidedDie() {

}

function rollTwoSixSidedDie() {

}

function rollTwelveSidedDie() {

}

function rollTwentySidedDie() {

}


function resetAllRolls() {

}

// Math Section



// Dom helper functions - extra credit
