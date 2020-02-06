/**
 * You are given two non-empty strings; a big string and a small string.
 * Write a function that returns the smallest substring in the big string that contain
 * all of the characters found in the small string.
 * 
 * Note 1) the substring can contain other characters not found in the small string
 *      2) the characters in the substring don't have to be in order as they appear in the small string
 *      3) if the small string has duplicate characters, the substring has to contain those duplicate characters
 *      (it can also contain more, but not fewer)
 * 
 *      sample input: "abcd$ef$axb$c$",  "$$abf"
 *      sample output: "f$axb$"
 */

   //Time O(B + S) and Space O(B + S) : B is bigString and s is smallString
    function smallestSubstringContaining(bigString, smallString) {
        const targetCharCounts = getCharCounts(smallString);  //iterate through small string and store the count of charcaters in a hash
        // console.log('targetCharCounts', targetCharCounts);
        const substringBounds = getSubstringBounds(bigString, targetCharCounts);
        // console.log('substringBounds',substringBounds)
        return getStringFromBounds(bigString, substringBounds);s
    }

    //helper functions

    const getSubstringBounds = (str, targetCharCounts) => {
        const substringCharCounts = {};
        let subStringBounds = [0,Infinity];
        const numUniqueChars = Object.keys(targetCharCounts).length; // how many unique chars in smallString
        let numUniqueCharsCheck = 0;
        let leftIdx = 0;
        let rightIdx = 0;
        //Move rightIdx to rhe right of bigString until you've counted
        //make sure all of the target charcaters are counted enough times
        while (rightIdx < str.length) {
            // console.log('inside first while')
            const rightChar = str[rightIdx];
            if (! (rightChar in targetCharCounts)) {
                rightIdx += 1;
                continue;
            } 
            increaseCharCount(rightChar, substringCharCounts);
            
            if (substringCharCounts[rightChar] === targetCharCounts[rightChar]) {
                numUniqueCharsCheck += 1;
            }

            //when do we move leftIdx?
            //move leftIdx to the right until you no longer have enough of the target characters in between leftIdx and rightIdx
            //also update substringBounds while doing so
            while (numUniqueCharsCheck === numUniqueChars && leftIdx <= rightIdx) {
                //get or update smallest substring
                subStringBounds = getCloserBounds(leftIdx, rightIdx,subStringBounds[0], subStringBounds[1]);
                // console.log('closerbounds', subStringBounds);
                const leftChar = str[leftIdx];
                if (!(leftChar in targetCharCounts)) {
                    leftIdx += 1;
                    continue;
                }
                if (substringCharCounts[leftChar] === targetCharCounts[leftChar]) {
                    numUniqueCharsCheck -= 1
                }
                //decrease charCount by 1 in substringCharCount hash
                decreaseCharCount(leftChar, substringCharCounts);
                leftIdx += 1
            }
            rightIdx += 1;
        }
        return subStringBounds;
    }

    const getStringFromBounds = (str, bounds) => {
        // console.log('bounds here',bounds)
        const [start, end] = bounds;
        if (end === Infinity) return '';
        return str.slice(start, end + 1);
    }

    const getCharCounts = str => {
        const charCount =  {};
        for (const char of str) {
            if (charCount.hasOwnProperty(char)) {
                charCount[char] +=1;
            }else {
                charCount[char] = 1;
            }
        }
        return charCount;
    }

    const increaseCharCount = (char, charCounts) => {
        charCounts[char] = (charCounts[char] || 0) +1;
    }
    const decreaseCharCount = (char, charCount) => {
        charCount[char] -= 1;
    }
    const getCloserBounds = (idx1, idx2, idx3, idx4) => {
        return (idx2 - idx1) < (idx4 - idx3)? [idx1, idx2]: [idx3, idx4]
    }

    //Test
    // console.log(smallestSubstringContaining("abcd$ef$axb$c$", "$$abf"));

   