
 function reduce(array, callback, initial){
        if (Array.isArray(array)){
            let acc;
            if(initial === undefined){
                acc = array[0];
                array = array.slice(1);
            }
            else {
                acc = initial;
            }  
        
    
        array.forEach(function(element, index, arr) {
            acc = callback(acc, element, index, arr);
    
        });
        return acc;
        
    }
    else return ' First Arg should be an array';
    }


    //
    const multiply = function(a, b) {
        return a * b;
    }
    console.log(reduce([1,2,3,4],multiply));