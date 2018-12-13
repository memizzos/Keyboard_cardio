// Napisz funkcje która generuje losową liczbe (zwraca), jak argumenty przyjmuje
// min (minimalna wartość) oraz max (największa możliwa do wygenerowania wartość)
const buttonsKey = document.getElementsByClassName("key");
let lastKey;


function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}

function getRandomKey() {
   index = Math.floor(Math.random() * buttonsKey.length);
    const key = buttonsKey[index];
    if (key === lastKey){
        console.log('The same key!!!!!!!!!!!!');
        return getRandomKey();
    }
    lastKey = key;
    return key;
}

console.log(getRandomKey());

let firekey = buttonsKey[index].setAttribute("class", "key fire-key");

function getRandomFireKey(){
    return firekey;
}
getRandomFireKey();
//Zad.dom
// stwórz funkcje która losowo do klawisza dodaje klase fire-key