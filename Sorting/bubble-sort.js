function bubbleSort(array) {
    let swap;
    for (let i = 1; i < array.length; i += 1) {
        sawp = array[i];
        for ( let j = i  - 1; j >= 0; j -= 1) {
            if (swap < array[j]) {
              array[j+1]  = array[j];
              array[j] = swap
            } else { break; }
        
        }
    }
    return array;
}