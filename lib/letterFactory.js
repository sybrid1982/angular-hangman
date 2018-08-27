function LetterFactory() {
    let lettersInWord = [];

    const checkLetter = (letterToCheck) => {
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

    return { 
            checkLetter,
            getLettersFromWord,
    }
}

angular.module('App').factory('LetterFactory', LetterFactory);