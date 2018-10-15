describe('LetterFactory', function () {
    let LetterFactory;

    const letterState = {
        UNUSED: 'unused',
        FAIL: 'fail',
        SUCCESS: 'success',
    }

    beforeEach(angular.mock.module('App'))
    
    beforeEach(inject(function(_LetterFactory_) {
        LetterFactory = _LetterFactory_;
    }));

    it('should exist', function() {
        expect(LetterFactory).toBeDefined();
    });

    describe('.checkLetter', function () {
        it('should exist', function () {
            expect(LetterFactory.checkLetter).toBeDefined();
        });
        it('returns false if parameter is not in list of letters', function () {
            LetterFactory.getLettersFromWord('c');
            
            expect(LetterFactory.checkLetter('a')).toBe(false);
        });
        it('returns true if parameter is in list of letters', function () {
            LetterFactory.getLettersFromWord('c');
            
            expect(LetterFactory.checkLetter('c')).toBe(true);
        });
        it('should add letters to array of guessed letters', function () {
            LetterFactory.getLettersFromWord('cat');
            LetterFactory.checkLetter('c');

            expect(LetterFactory.checkedLetters[0] === 'c');
        });
    });
    describe('.getLettersFromWord', function () {
        it('should exist', function () {
            expect(LetterFactory.getLettersFromWord).toBeDefined();
        });
        it('should take letters from passed word and put them in lettersInWord', function() {
            LetterFactory.getLettersFromWord('cat');
            expect(LetterFactory.checkLetter('c')).toBe(true);
            expect(LetterFactory.checkLetter('a')).toBe(true);
            expect(LetterFactory.checkLetter('t')).toBe(true);
        });
    });
    describe('checkedLetters', function () {
        it('should exist', function () {
            expect(LetterFactory.checkedLetters).toBeDefined();
        });
    });
    describe('.isLetterChecked', function () {
        it('should exist', function () {
            expect(LetterFactory.isLetterChecked).toBeDefined();
        });
        it('returns letter.UNUSED if letter has not been used', function() {
            expect(LetterFactory.isLetterChecked('a')).toEqual(letterState.UNUSED);
        });
        it('does not return letter.FAIL if letter has been used and is not on list', function(){
            expect(LetterFactory.isLetterChecked('a')).not.toEqual(letterState.FAIL);
        });
        it('returns letter.SUCCESS if letter has been used and is on list', function() {
            LetterFactory.getLettersFromWord('cat');
            LetterFactory.guessLetter('a');

            expect(LetterFactory.isLetterChecked('a')).toEqual(letterState.SUCCESS);
        });
        it('returns letter.FAIL if letter has been used and is not on list', function() {
            LetterFactory.getLettersFromWord('cat');
            LetterFactory.guessLetter('d');

            expect(LetterFactory.isLetterChecked('d')).toEqual(letterState.FAIL);
        })
    });
});