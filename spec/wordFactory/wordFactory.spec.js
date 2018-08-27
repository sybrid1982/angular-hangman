describe('WordFactory', function () {
    let WordFactory;

    beforeEach(angular.mock.module('App'))
    
    beforeEach(inject(function(_WordFactory_) {
        WordFactory = _WordFactory_;
    }));

    it('should exist', function() {
        expect(WordFactory).toBeDefined();
    });

    describe('.getWord', function() {
        it('should exist', function() {
            expect(WordFactory.getWord).toBeDefined();
        });

        it('should return a string', function() {
            expect(WordFactory.getWord()).toEqual(jasmine.any(String));
        });

        it('should return a non-empty string', function() {
            expect(WordFactory.getWord().length).toBeGreaterThan(0);
        });

        it('should not return the same word every time', function() {
            let wordFrequency = {};
            let wordCount = 0;
            for(let i = 0; i < 1000; i++) {
                let newWord = WordFactory.getWord();
                if(wordFrequency[newWord] === undefined) {
                    wordFrequency[newWord] = 1;
                    wordCount++;
                } else {
                    wordFrequency[newWord] += 1;
                }
            }
            expect(wordCount).toBeGreaterThan(1);
        });
    });
});