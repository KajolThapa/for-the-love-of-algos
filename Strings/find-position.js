/**
 * Given a robot which can only move in four directions, UP(U), DOWN(D), LEFT(L), RIGHT(R). 
 * Given a string consisting of instructions to move. Output the coordinates of a robot after executing the instructions. 
 * Initial position of robot is at origin(0, 0).
 * 
 * SampleInput : move = "UDDLRL" 
SampleOutput : (-1, -1)
Move U : (0, 0)--(0, 1)
Move D : (0, 1)--(0, 0)
Move D : (0, 0)--(0, -1)
Move L : (0, -1)--(-1, -1)
Move R : (-1, -1)--(0, -1)
Move L : (0, -1)--(-1, -1)

Therefore final position after the complete
movement is: (-1, -1)

SampleInput : move = "UDDLLRUUUDUURUDDUULLDRRRR"
SampleOutput : (2, 3)

 */
function findPosition(path) {
    let x = 0; let y = 0;

    for ( let i = 0; i < path.length; i++) {
        const move = path[i];
        switch(move) {
            case "U":  y++; break;
            case "D":  y--; break;
            case "R":  x++; break;
            case "L":  x--; break;
            default: "invalid"
        }
    }
    return `(${x} , ${y})`;
}

console.log(findPosition("UDDLLRUUUDUURUDDUULLDRRRR"));
console.log(findPosition("UDDLRL" ));