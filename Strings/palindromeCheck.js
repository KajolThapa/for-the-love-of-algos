//O(n) Time | O(1) space
function isPalindrome(string) {
    let leftIndex = o;
    let rightIndex = string.length - 1;
    while (leftIndex < rightIndex) {
        if (string[leftIndex] !== string[rightIndex]) {
            return false;
        }
        leftIndex++;
        rightIndex--;
    }
    return true;
}