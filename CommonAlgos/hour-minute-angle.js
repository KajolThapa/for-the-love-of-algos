// Find the smaller of the two angles produced by the clock hands at a time h:m

/**
 Examples: 
 Input: hour = 12, minute = 30  Output: 165 degrees
 Input: hour = 3, minute = 30 Output: 75 degrees
 
 * Approach : calculate the angle between hour hand and minute hand
  Taking 12:00 as a reference where hour = 12 and minute = 0
  First Calculate the angle made by hour hand with respect to 12:00 in h hours and m minutes
  we know that hour hand moves 360 degree in 12 hours(12 * 60 mins) > 0.5 degree in 1 min
  Same way we know minute hand moves 360 degree in 60 min > 6 degree in  1 min
  Find the difference between two angles
  Return the smaller of two possible angles
*/

const calculateAngle = (h, m) => {
    //validate the input
    if (h < 0 || m < 0 || h > 12 || m > 60) {
        throw new Eroor('Wrong input');
    }
    if (h === 12) h = 0;
    if (m === 60) m = 0;
    const hourAngle = 0.5 * (h * 60 + m);
    const minuteAngle = 6 * m;

    const angle = Math.abs(hourAngle - minuteAngle); 
    return  Math.min(360 - angle, angle)
};

//         { 'h': 1,  'm': 30, 'expected': 135  },
//         { 'h': 3,  'm': 15, 'expected': 7.5   },
//         { 'h': 6,  'm': 50, 'expected': 95    },
//         { 'h': 8,  'm': 15, 'expected': 157.5 },
//         { 'h': 11, 'm':  1, 'expected': 35.5  }

// console.log(calculateAngle(11,1));