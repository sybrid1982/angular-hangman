function LetterFactory() {
    let lettersInWord = [];
    let checkedLetters = [];

    const letterState = {
        UNUSED: 'unused',
        FAIL: 'fail',
        SUCCESS: 'success',
    }

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
        if(checkLetterInCheckedLetters(letter)) {
            return letterState.FAIL;
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
    }
}

angular.module('App').factory('LetterFactory', LetterFactory);