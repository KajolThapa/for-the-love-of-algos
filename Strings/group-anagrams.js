//Time O(wn log(n)) time
//Space O(wn)
// where w is the number of words and n is the length of the longest word
// iterate through w words and sort for each word - at most-  wnlog(n) time
function groupAnagrams(wordsArray) {
    const hash = {};
    for (const word of wordsArray) {
        const sortedWord = word.split('').sort().join('');
        if (!hash.hasOwnProperty(sortedWord)){
            hash[sortedWord] = [word];
            // console.log(hash);
        } else {
            hash[sortedWord].push(word);
        }
    }
    return Object.values(hash);
}

// const words = ["yo", "oy", "act", "tac", "flop", "lpfo", "foo", "cat", "olfp"]
// console.log(groupAnagrams(words))