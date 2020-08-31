/**
 * Given a sequence of moves for a robot, check if the sequence is circular or not. 
 * A sequence of moves is circular if first and last positions of robot are same. 
 * A move can be on of the following.
  
    G - Go one unit
    L - Turn left
    R - Turn right 

    Input: path[] = "GLGLGLG"
    Output: Given sequence of moves is circular 

    Input: path[] = "GLLG"
    Output: Given sequence of moves is circular 

    Approach

         N
           |
           |
   W -------------- E
           |
           |
           S 

    consider the starting position as (0, 0) and direction as North (We can pick any values for these). If after the given sequence of moves, we come back to (0, 0), then given sequence is circular, otherwise not.
    The move ‘G’ changes either x or y according to following rules.
a) If current direction is North, then ‘G’ increments y and doesn’t change x.
b) If current direction is East, then ‘G’ increments x and doesn’t change y.
c) If current direction is South, then ‘G’ decrements y and doesn’t change x.
d) If current direction is West, then ‘G’ decrements x and doesn’t change y.

    The moves ‘L’ and ‘R’, do not change x and y coordinates, they only change direction according to following rule.
a) If current direction is North, then ‘L’ changes direction to West and ‘R’ changes to East
b) If current direction is East, then ‘L’ changes direction to North and ‘R’ changes to South
c) If current direction is South, then ‘L’ changes direction to East and ‘R’ changes to West
d) If current direction is West, then ‘L’ changes direction to South and ‘R’ changes to North.

 */

 function isCircular(path) {
     // N = 0
     // E = 1;
     // S = 2;
     // W = 3
     let x= 0; let y = 0;
     let direction = 0;

     for (let i = 0; i < path.length; i++) {
         const currentMove = path[i];
         if (currentMove === 'R') {
             direction = (direction + 1) % 4;
         } else if (currentMove === 'L') {
             direction = (4 + direction - 1) %4 ;
         } else {
             //if move is Go, then change x or y acc to current direction
             if (direction === 0) {
                 y += 1;
             } else if (direction === 1) {
                 x += 1;
             } else if (direction === 2) {
                 y -= 1;
             } else { // direction is 3
                 x -= 1;
             }
         }
     }
     return (x === 0 && y === 0)
 }
 console.log(isCircular("GLGLGLG"));


  
