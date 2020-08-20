/**
 * The janitor of a high school is extremely efficient. By the end of eah day, all of the school's waste is in plastic bags
 * weighing between 1.01 pounds to 3 pounds. All plastic bags are then taken to the trash bons outside. One trip is described as
 * selecting a number of bags which together do not weigh more than 3 pounds, dumping them in the outside trash can and returning 
 * to the school. Given the number of plastic bags, and the weight of each bag, determine the number of trips the janitor has 
 * to make.
 * 
 * Example: n = 5
 *          weights = [1.01, 1.99, 2.5, 1.5, 1.01]
 * 
 *  The janitor can carry all plastic bags out in 3 trips [ 1.01+1.99, 2.5, 1.5+1.01]
 * 
 */

 
 function efficientJanitor(weights) {
     const maxWeightAllowed = 3;
     weights.sort();
     let left = 0;
     let right = weights. length - 1;
     let trips = 0;
     while (left <= right) {
         if (left === right) {
             trips += 1;
            break;
         } else if (weights[left] + weights[right] <= maxWeightAllowed) { 
             left += 1;
             right -= 1;
             trips += 1;
         } else {
             right -= 1;
             trips += 1;
         }
     }
     return trips;
 }
 console.log(efficientJanitor([1.01, 1.99, 2.5, 1.5, 1.01]));