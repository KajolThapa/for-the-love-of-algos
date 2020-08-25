/*
You are in charge of a display advertising program. Your ads are displayed on websites all over the internet. You have some CSV input data that counts how many times that users have clicked on an ad on each individual domain. Every line consists of a click count and a domain name, like this:

counts = [ "900,google.com",
     "60,mail.yahoo.com",
     "10,mobile.sports.yahoo.com",
     "40,sports.yahoo.com",
     "300,yahoo.com",
     "10,stackoverflow.com",
     "20,overflow.com",
     "2,en.wikipedia.org",
     "1,m.wikipedia.org",
     "1,mobile.sports",
     "1,google.co.uk"]

Write a function that takes this input as a parameter and returns a data structure containing the number of clicks that were recorded on each domain AND each subdomain under it. For example, a click on "mail.yahoo.com" counts toward the totals for "mail.yahoo.com", "yahoo.com", and "com". (Subdomains are added to the left of their parent domain. So "mail" and "mail.yahoo" are not valid domains. Note that "mobile.sports" appears as a separate domain near the bottom of the input.)

Sample output (in any order/format):

calculateClicksByDomain(counts)
1340    com
 900    google.com
  10    stackoverflow.com
  20    overflow.com
 410    yahoo.com
  60    mail.yahoo.com
  10    mobile.sports.yahoo.com
  50    sports.yahoo.com
   3    org
   3    wikipedia.org
   2    en.wikipedia.org
   1    m.wikipedia.org
   1    mobile.sports
   1    sports
   1    uk
   1    co.uk
   1    google.co.uk

n: number of domains in the input
(subdomains within a domain are constant)

*/
let counts = [ "900,google.com",
    "60,mail.yahoo.com",
    "10,mobile.sports.yahoo.com",
    "40,sports.yahoo.com",
    "300,yahoo.com",
    "10,stackoverflow.com",
    "20,overflow.com",
    "2,en.wikipedia.org",
    "1,m.wikipedia.org",
    "1,mobile.sports",
    "1,google.co.uk" ];

const calculateClicksByDomain = (counts) => {
  // split each element by ',' 
  counts = counts.map(count => count.split(','));
  // create obj
  const countsObj = {};
  
  for (let i = 0; i < counts.length; i++) {
    const url = counts[i][1].split('.');
    let currUrl = "";
    for (let j = url.length -1; j >= 0; j--) {
      // if pointer is empty string then initialize pointer to url
      if (currUrl === "") {
        currUrl = url[j];
      } else {
        // else add period in between url[j] and currUrl
        currUrl = url[j] + '.' + currUrl;
      }
      
      
      // if current URL exist then increment it's value by respective clicks
      if (countsObj[currUrl]) {
        countsObj[currUrl] += parseInt(counts[i][0]);
      } else {
          // else create new key-value pair in countsObj where key is the curURL and value is respective number
        countsObj[currUrl] = parseInt(counts[i][0]);
      }
    }
  }
  
  return countsObj
}

console.log(calculateClicksByDomain(counts))