// Napisz funkcje która generuje losową liczbe (zwraca), jak argumenty przyjmuje
// min (minimalna wartość) oraz max (największa możliwa do wygenerowania wartość)
const buttonsKey = document.getElementsByClassName("key");
let lastKey;
let currentKey;
let OffGame = false;
let score = 0;
let endScore = 20;


function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getRandomKey() {
   index = Math.floor(Math.random() * buttonsKey.length);
    const key = buttonsKey[index];
    if (key === lastKey){
        return getRandomKey();
    }
    lastKey = key;
    return key;
}

function peep(){
    const time = getRandomNumber(1000, 2000);
    const key = getRandomKey();
    addClassToElement('fire-key', key);
    currentKey = key;
    setTimeout(() => {
        if (!OffGame) {peep()};
    }, time);
}
function addClassToElement(className, element){
    element.classList.add(className);
    const time = getRandomNumber(1000, 2000);
    setTimeout(() => {
        removeClassFromElement(className, element)
    }, time);
}


function removeClassFromElement(className, element){
    element.classList.remove(className);
}


function showScore(){
    menu = document.querySelector(".game-menu");
    menu.innerHTML = `<div class="scoreBoard">Score: ${score}</div>`;
};

function endgame(){
    OffGame = true;
    window.removeEventListener('keydown', checkKey);
    menu.innerHTML = `Victory! You score: ${score}<button onclick="startGame()"><b>Play Again</b>`
};

function startGame(){
    score = 0;
    showScore()
    window.addEventListener('keydown', checkKey);
    peep();
    OffGame = false;
    scoreBoard = document.querySelector('.scoreBoard')
};

function checkKey(event) {
    if (event.keyCode == currentKey.attributes[0].value) {
        score ++;
        removeClassFromElement('fire-key', currentKey);
        addClassToElement('correct-key-down', currentKey);
    }
    else {
        score --;
        let wrongKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
        addClassToElement('wrong-key-down', wrongKey);
    }
    scoreBoard.innerHTML = `Score: ${score}`;
    if (score == endScore) {
        endgame();
    }
}