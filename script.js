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
        console.log('The same key!!!');
        return getRandomKey();
    }
    lastKey = key;
    return key;
}

console.log(getRandomKey());


function peep(){
    const time = getRandomNumber(1000, 2000);
    const key = getRandomKey();
    key.classList.add('fire-key');
    currentKey = key;
    console.log(currentKey.attributes[0]);
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
    time = getRandomNumber(1000, 2000);
    setTimeout(element.classList.remove(className), time);
}


function showScore(){
    menu = document.querySelector(".game-menu");
    menu.innerHTML = `<div class="scoreBoard">Score: ${score}</div>`;
};

function endgame(){
    OffGame = true;
};

function startGame(){
    showScore()
    window.addEventListener('keydown', checkKey);
    peep();
    OffGame = false;
    scoreBoard = document.querySelector('.scoreBoard')
};

function checkKey(event) {
    if (event.keyCode == currentKey.attributes[0].value){
        score ++;
        removeClassFromElement('fire-key', currentKey);
        addClassToElement('correct-key-down', currentKey);
        console.log(score);
    }
    else{
        score --;
        let wrongKey = document.querySelector(`div[data-key="${event.keyCode}"]`);
        console.log(score);
        addClassToElement('wrong-key-down', wrongKey);
    }
    scoreBoard.innerHTML = `Score: ${score}`;
    if (score == endScore) {
        endgame()
    }
}