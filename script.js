// Napisz funkcje która generuje losową liczbe (zwraca), jak argumenty przyjmuje
// min (minimalna wartość) oraz max (największa możliwa do wygenerowania wartość)

function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max-min+1) + min);
}
