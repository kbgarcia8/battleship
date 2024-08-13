const reverseString = function(words) {
    //const reversedStrings = words.map(str => str.split('').reverse().join(''));
    
    const multipleWords = words.split(' ');
    const reversedWord = words.split('').reverse().join('');
    return reversedWord;
    
    if (multipleWords) {

        multipleWords.forEach(element => {
            const singleWord = element.split('').reverse().join('');
            const multipleWords = singleWord.join(' ');
        });
        return multipleWords;
    }
    
};

// Do not edit below this line
module.exports = reverseString;
