/*
Construct a function intersection that compares input arrays and 
returns a new array with elements found in all of the inputs.
*/

function intersection(arrays){
    const base = arguments[0];
    //console.log(base);
   return base.reduce((acc, curr) => {
        let hasCommon = true;
        for (let i  = 1; i < arguments.length; i+=1){
            //console.log(arguments[i]);
            if (!arguments[i].includes(curr)) {
                hasCommon = false;
                 break;
            }
        }
        if (hasCommon) acc.push(curr);
        return acc;
    },[])
};

console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));