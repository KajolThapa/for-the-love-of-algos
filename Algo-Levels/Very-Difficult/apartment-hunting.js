
/**
    You're looking to move into a new apartment, and you're given a list of blocks where each block contains an apartment that you could move into. 
    In order to pick your apartment, you want to optimize its location. You also have a list of
    requirements: a list of buildings that are important to you. For instance, you might have value 
    having a school and a gym near your apartment. The list of blocks that you have contains information at every block about all
    the buildings that are present and absent at the block in question.
    For instance, for every block, you might know whether a school, a pool, an office, and  a gym are present or not.
    In order to optimize your life, you might want to minimize the farthest distance you'd have to walk from your apartment to reach all of your required buildings.

    Write a function that takes in a list of blocks and a listof your required buildings and that returns the location(the index) of the block that is most optimal for you.

    Sample input:
    [
        {
            "gym":false,
            "school":true,
            "store": false,
        },
        {
            "gym":true,
            "school":false,
            "store":false,
        },
        {
            "gym":true,
            "school":true,
            "store":false,
        },
        {
            "gym":false,
            "school":true,
            "store":false,
        },
        {
            "gym":false,
            "school":true,
            "store":true,
        }
    ]
    ["gym", "school","store"]
    Sample output: 3 (at index 3) //the farthest you would have to walk to reach a gym, a school, or a store, is 1 block, at any other index, you would have to walk farther

*/

// < ==== SOLUTION 1   # O(b^2 r) time   |    O(b) space
// function apartmentHunting(blocks,reqs) {
//     const maxDistanceAtBlocks = new Array(blocks.length).fill(-Infinity);
//     for (let i = 0; i < blocks.length; i += 1) {
//         reqs.forEach(req =>  {
//             let closetReqDistance = Infinity;
//             for (let j = 0; j < blocks.length; j += 1) {
//                 if (blocks[j][req]) {
//                     closetReqDistance = Math.min(closetReqDistance, distanceBetween(i, j));
//                 }
//             }
//             maxDistanceAtBlocks[i] = Math.max(maxDistanceAtBlocks[i], closetReqDistance)
//         });

//     }
//     return getIndexAtMinValue(maxDistanceAtBlocks);
// }

function distanceBetween(a, b) {
    return Math.abs( a- b);
}

function getIndexAtMinValue(array) {
    let minValue = Infinity;
    let idxAtMinValue = 0;
    for (let i = 0 ; i < array.length; i += 1) {
        if (array[i] < minValue) {
            minValue = array[i];
            idxAtMinValue = i;
        }
    }
    return idxAtMinValue;
}

// < ========== SOLUTION 2  O(br) Time   | O(br) Space

function apartmentHunting(blocks, reqs) {
    const minDistancesFromBlocks = reqs.map(req => getMinDistances(blocks, req));  // O(br)
    // console.log('This is minDistancesFromBlocks', minDistancesFromBlocks);
    const maxDistancesAtBlocks = getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks); // O(br)
    // console.log('MaxDistancesAtBlock will be', maxDistancesAtBlocks);
    return getIndexAtMinValue(maxDistancesAtBlocks); // O(br)

}


function getMinDistances(blocks, req) {
    minDistances = new Array(blocks.length);
    let closetReqIndex = Infinity;
    for (let i = 0; i < blocks.length; i += 1){
        if (blocks[i][req]) closetReqIndex = i;
        minDistances[i] = distanceBetween(i, closetReqIndex)
    }
    for (let i = blocks.length - 1; i >= 0; i -= 1) {
        if (blocks[i][req]) closetReqIndex = i;
        minDistances[i] = Math.min(minDistances[i], distanceBetween(i, closetReqIndex)
        );
    }
    return minDistances;

}

function getMaxDistancesAtBlocks(blocks, minDistancesFromBlocks) {
    const maxDistancesAtBlocks = new Array(blocks.length);
    for (let i = 0; i < blocks.length; i += 1) {
        const minDistancesAtBlock = minDistancesFromBlocks.map(distances => distances[i]);
        // console.log('***', minDistancesAtBlock);
        maxDistancesAtBlocks[i] = Math.max(...minDistancesAtBlock);
        // console.log('Hah',maxDistancesAtBlocks[i]);
    }
    return maxDistancesAtBlocks;

}





const blocks =  [
    {
        "gym": false,
        "school":true,
        "store": false,
    },
    {
        "gym":true,
        "school":false,
        "store":false,
    },
    {
        "gym":true,
        "school":true,
        "store":false,
    },
    {
        "gym":false,
        "school":true,
        "store":false,
    },
    {
        "gym":false,
        "school":true,
        "store":true,
    }
]
console.log(apartmentHunting(blocks, ["gym", "school","store"] ))

