
// A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l’iniziale maiuscola.
// Es: [‘pippo’, ‘PLUTO’, ‘Paperino’] => [‘Pippo’, ‘Pluto’, ‘Paperino’]

const strings = [
    "Lorenzo",
    "LORENZO",
    "lorenzo",
    "LoReNzO"
];

strings.forEach((element, index, array) => {

    const firstLetter = element.charAt(0);

    const remainingLetters = element.substring(1);   

    const firstLetterCap = firstLetter.toUpperCase();
    
    const remainingLettersLow = remainingLetters.toLowerCase();

    const capitalizedWord = firstLetterCap + remainingLettersLow;

    array[index] = capitalizedWord;

});

console.log(strings);
