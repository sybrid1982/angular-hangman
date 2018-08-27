'use strict';

function WordFactory() {

    const words = ['cat', 'dog', 'bird'];

    const getWord = () => {
        let newIndex = Math.floor(Math.random() * words.length);
        return words[newIndex];
    }

    return {
        getWord,
    };
}

angular.module('App').factory('WordFactory', WordFactory);