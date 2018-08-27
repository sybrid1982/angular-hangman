function LetterFactory() {
    let lettersInWord = [];
    let checkedLetters = [];

    const checkLetter = (letterToCheck) => {
        checkedLetters.push(letterToCheck);
        if(lettersInWord.length > 0) {
            for(letter of lettersInWord) {
                if(letterToCheck === letter) {
                    return true;
                }
            }
        }
        return false;
    }

    const getLettersFromWord = (word) => {
        for(letter of word) {
            let letterFound = false;
            if(lettersInWord.length > 0) {
                for(storedLetter in lettersInWord) {
                    if(storedLetter === letter) {
                        letterFound = true;
                    }
                }
                if(!letterFound) {
                    lettersInWord.push(letter);
                }
            } else {
                lettersInWord.push(letter);
            }
        }
    }

    const isLetterChecked = (letter) => {

    }

    return { 
            checkLetter,
            getLettersFromWord,
            checkedLetters,
            isLetterChecked,
    }
}

angular.module('App').factory('LetterFactory', LetterFactory);