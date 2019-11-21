/**
    Imagine that you want to schedule a meeting of a certain duration with a co-worker. You have access
    to your calendar and your co-worker's calendar(both of which contain respective meetings for the day,
    in the form [starTime, endTime]), as well as both of your daily bounds(i.e the earliest and latest times
    at which you're available for meetings everyday, in the form [earliestTime, latestTime])
    
    Write a function that takes in your calendar, your daily bounds, your co-workers calendar and their daily bounds,
    and duration of the meeting(in minutes) that you want to schedule. 
    This function should return a list of all the time blocks( in the form startTime, endTime) during which you could schedule the meeting.
    Note: the times will be given in and should be returned in military time( example times: '8:30', '9:01', '23:56')

    Sample Input:
    calendar1--> [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']]
    dailyBounds1 --> ['9:00', '20:00']

    calendar2--> [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']]
    dailyBounds2 --> ['10:00', '18:30']

    meetingDuration --> 30

    Output --> [['11:30','12:00'], ['15:00', '16:00'], ['18:00', '18:30]]

 */

// Time O(c1 + c2)    |  Space O(c1 + c2) --> c1 & c2 represents length of calendar1 and calendar2 respectively

function calendarMatching(calen1, dailyBounds1, calen2, dailyBounds2, meetingDuration) {
    const updatedCalen1 = updateCalendar(calen1, dailyBounds1);
    // console.log(updatedCalen1);
    const updatedCalen2 = updateCalendar(calen2, dailyBounds2);
    const mergedCalendar = mergeCalendars(updatedCalen1, updatedCalen2);
    console.log(mergedCalendar);
    const flattenedCalender = flattenCalendar(mergedCalendar);
    return getAvailabilities(flattenedCalender, meetingDuration);
    
}

// helper functions
function updateCalendar(calender, dailyBounds) {
    // const updatedCalendar = calendar.slice();
    // updatedCalendar.unshift(['0:00', dailyBounds[0]]);
    // updatedCalendar.push([dailyBounds[1], '23:59']);
    //above three lines can be replaced with this line
    const updatedCalender = [['0:00',dailyBounds[0]],...calender,[dailyBounds[1], '23:59']];
    //transform string values to numeric value represnting minutes > # '1:00' --> 60  #'2:30' --> 150
    return updatedCalender.map((meeting => meeting.map(timeStr => timeToMinutes(timeStr))));  
}

function timeToMinutes(time) {
    const [hours, minutes] = time.split(':').map(str => parseInt(str));
    return hours * 60 + minutes;
} 

function mergeCalendars(c1, c2) {
    const merged = [];
    let i = 0, j = 0;
    while(i < c1.length && j < c2.length) {
        const meeting1 = c1[i];
        const meeting2 = c2[j];
        if (meeting1[0] < meeting2[0]) {
            merged.push(meeting1);
            i += 1;
        }
        else {
            merged.push(meeting2);
            j += 1;
        }
    }
    while (i < c1.length) {
        merged.push(c1[i]);
         i += 1;
    }
    //or simply while ( i < c1.length) merged.push(c1[i++]);
    while ( j < c2.length) {
        merged.push(c2[i]);
        j += 1;
    }
    //or while ( j < c2.length) merged.push(c2[j++])
    return merged;
}

function flattenCalendar(c) {
    const flattened = [c[0].slice()];
    for (let i = 1; i < c.length; i +=1){
        const currentMeeting = c[i];
        const previousMeeting = flattened[flattened.length - 1];
        const [currentStart, currentEnd] = currentMeeting;
        const [previousStart, previousEnd] = previousMeeting;
        if (previousEnd >= currentStart) {
            const newPreviousMeeting = [previousStart, Math.max(previousEnd, currentEnd)];
            flattened[flattened.length - 1] = newPreviousMeeting;
        }
        else {
            flattened.push(currentMeeting.slice());
        }
    }
    return flattened;

}

function getAvailabilities(c, duration) {
    const matchingAvailabilities = [];
    for (let i = 1; i < c.length; i += 1) {
        let start = c[i-1][1];
        let end = c[i][0];
        let availableDuration = end - start;
        if (availableDuration >= duration) {
            matchingAvailabilities.push([start, end]);
        }
    }
    return matchingAvailabilities.map(meeting => meeting.map(timeNumeric => minutesToTime(timeNumeric)));
}

function minutesToTime(minutes) {
    const hoursString = Math.floor(minutes/60).toString();
    const mins = minutes % 60;
    const minutesString = mins < 10? '0' + mins.toString(): mins.toString();
    return hoursString + ':' + minutesString;``  
}


// Test
const c1 = [['9:00', '10:30'], ['12:00', '13:00'], ['16:00', '18:00']];
const dailyBounds1 = ['9:00', '20:00'];
const c2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']];
const dailyBounds2 = ['10:00', '18:30']
let meetingDuration = 30;

console.log(calendarMatching(c1,dailyBounds1, c2, dailyBounds2, meetingDuration));