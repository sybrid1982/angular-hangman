function LetterFactory() {
    let lettersInWord = [];
    let checkedLetters = [];

    const letterState = {
        UNUSED: 'unused',
        FAIL: 'fail',
        SUCCESS: 'success',
    }

    const guessLetter = (letter) => {
        // First, check if the letter was already guessed
        // Ideally this should never get called because we shouldn't
        // allow letters that have been guessed to be clicked to
        // be clicked to guess again, but this provides an extra
        // layer of safety
        if(checkedLetters.includes(letter)) {
            return -1;
        }
        // Then, if it wasn't already checked, add it to the list of checked letters
        checkedLetters.push(letter);

        // Then, check if it is in the word and return either true or false
        return checkLetter(letter);
    };

    const checkLetter = (letterToCheck) => {
        if(lettersInWord.length > 0) {
            for(letter of lettersInWord) {
                if(letterToCheck === letter) {
                    return true;
                }
            }
        }
        return false;
    };

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
        if(checkLetterInCheckedLetters(letter)) {
            if(checkLetter(letter)){
                return letterState.SUCCESS;
            } else {
                return letterState.FAIL;
            }
        }
        return letterState.UNUSED;
    }

    const checkLetterInCheckedLetters = (paramLetter) => {
        let letterFound = false;
        for(letter of checkedLetters) {
            if(paramLetter === letter) {
                letterFound = true;
            }
        }
        return letterFound;
    }

    return { 
            checkLetter,
            getLettersFromWord,
            checkedLetters,
            isLetterChecked,
            guessLetter
    }
}

angular.module('App').factory('LetterFactory', LetterFactory);