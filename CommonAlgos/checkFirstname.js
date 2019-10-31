/**
 * Create an array of 4 objects that have two keys; first name and age.
 * For each element in the array, return the first name concatenated with a last name. If the name does nt exist, return a "Not found" string
 */

const memberArray = [
    { name: 'Mike', age: 30},
    { name: 'John', age: 50},
    { name: 'Boop', age: 23},
    { name: 'Kajol', age: 21},
    { name: 'Mishka', age: 8}
]

function members(member) {
    const checkFirstName = member.map((el, index) => {
        console.log(el.name);
        switch(el.name) {
            case  'Boop' || 'Mike': return el.name + ' Hauke';
            case 'Kajol' || 'John': return el.name + ' Thapa';
            case 'Mishka': return el.name  + ' Thapa Hauke';
            default: return ' Not Found';
        }
    });
    return checkFirstName;   
}
members(memberArray);