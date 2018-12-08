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

function getRandomFireKey(){
    let firekey = buttonsKey[index].className;
    let firekeyRepeated;
    firekey = "fire-key";
    if (firekey === firekeyRepeated){
        console.log('The same key!!!!!!!!!!!!');
        return getRandomFireKey();
    }
    firekey = firekeyRepeated;
}
getRandomFireKey();
//Zad.dom
// stwórz funkcje która losowo do klawisza dodaje klase fire-key