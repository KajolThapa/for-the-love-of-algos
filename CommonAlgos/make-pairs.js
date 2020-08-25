fsunction makepairs(text, keys = '') {
    //answer here
        let result = [];
        
        
        for (let [key, value] of Object.entries(text)) {
            let tuple = [];
            
            if (typeof value === 'object') {
                const newarray = makepairs(value, keys ? keys + '.' + key : key);
                result = result.concat(newarray);
            } else {
                tuple.push(keys ? keys + '.' + key : key);
                tuple.push(value);
                result.push(tuple);
            }
        }
        console.log(result)
        return result;
    }
    
    // const assert = require('assert');
    
    // const input2 = {
    //   name: "Charizard",
    //   moveset: {
    //     slot1: {
    //       name: "Fire Spin",
    //       pp: 10
    //     },
    //     slot2: null
    //   },
    //   isLegendary: false
    // };
    // assert.deepEqual(makepairs(input2), [
    //   ["name", "Charizard"],
    //   ["moveset.slot1.name", "Fire Spin"],
    //   ["moveset.slot1.pp", 10],
    //   ["moveset.slot2", null],
    //   ["isLegendary", false]
    // ]);
    // console.log("Test 2 passed!");