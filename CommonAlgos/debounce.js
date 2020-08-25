
/**
 * Purpose of Debounce
This function is built in order to limit the amount of times a function 
is called — scroll events, mousemove events, and keypress events are all
great examples of events that we might want to capture, but can be quite 
taxing if we capture them every single time they fire. In order to combat
 this, we implement debounce
 */

 const debounce = (func, time) => {
   let timeout;

   return function() {
     const functionCall = () => func.apply(this, arguments);
     clearTimeout(timeout);
     timeout = setTimeout(functionCall,time);
   }
 }

 //using debounce would look something like this
 window.addEventListener('keyup', debounce((e) => {
   console.log(e);
 }, 1000))