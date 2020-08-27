function testWord(str) {
    const letterGroup = ["l", "e", "a", "g", "u", "e", "a", "p", "p", "s"]
    const map = {};

    letterGroup.forEach(char => {
        if (char in map) {
            map.char += 1;
        } else {
            map.char = 1;
        }
    })

   for (const charkey in map) {
       if (str.includes(charkey)) {
           
       }
       
   }
}