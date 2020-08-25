/*

You are a developer for a university. Your current project is to develop a system for students to find courses they share with friends. The university has a system for querying courses students are enrolled in, returned as a list of (ID, course) pairs.

Write a function that takes in a list of (student ID number, course name) pairs and returns, for every pair of students, a list of all courses they share.

Sample Input:

student_course_pairs_1 = [
  ["58", "Software Design"],
  ["58", "Linear Algebra"],
  ["94", "Art History"],
  ["94", "Operating Systems"],
  ["17", "Software Design"],
  ["58", "Mechanics"],
  ["58", "Economics"],
  ["17", "Linear Algebra"],
  ["17", "Political Science"],
  ["94", "Economics"],
  ["25", "Economics"],
]

Sample Output (pseudocode, in any order):

find_pairs(student_course_pairs_1) =>
{
  [58, 17]: ["Software Design", "Linear Algebra"]
  [58, 94]: ["Economics"]
  [58, 25]: ["Economics"]
  [94, 25]: ["Economics"]
  [17, 94]: []
  [17, 25]: []
}

Additional test cases:

Sample Input:

student_course_pairs_2 = [
  ["42", "Software Design"],
  ["0", "Advanced Mechanics"],
  ["9", "Art History"],
]

Sample output:

find_pairs(student_course_pairs_2) =>
{
  [0, 42]: []
  [0, 9]: []
  [9, 42]: []
}


*/

const studentCoursePairs1 = [
    ["58", "Software Design"],
    ["58", "Linear Algebra"],
    ["94", "Art History"],
    ["94", "Operating Systems"],
    ["17", "Software Design"],
    ["58", "Mechanics"],
    ["58", "Economics"],
    ["17", "Linear Algebra"],
    ["17", "Political Science"],
    ["94", "Economics"],
    ["25", "Economics"]
  ];
  
  const studentCoursePairs2 = [
    ["42", "Software Design"],
    ["0", "Advanced Mechanics"],
    ["9", "Art History"],
  ];
  
  
  // create object for all the classes as keys and all students in the class as the value
  // create object with pairs and check if classes include those students and push into value array
  
  const find_pairs = (arr) => {
    const result = {};
    const classes = {};
    const students = [];
    const pairs = [];
    
    for (let i = 0; i < arr.length; i++) {
      if (classes[arr[i][1]]) {
        classes[arr[i][1]].push(arr[i][0]);
      } else {
        const a = []
        classes[arr[i][1]] = a;
        classes[arr[i][1]].push(arr[i][0]);
      }
    }
    
    for (let i = 0; i < arr.length; i++) {
      if (!students.includes(arr[i][0])) {
        students.push(arr[i][0])
      }
    }
    
    for (let i = 0; i < students.length; i++) {
      for (let j = i + 1; j < students.length; j++) {
        let pair = [];
        pair.push(students[i])
        pair.push(students[j])
        pairs.push(pair);
      }
    }
    
    for (let i = 0; i < pairs.length; i++) {
      result[pairs[i]] = [];
    }
    
    for (let key in classes) {
      for(let i = 0; i < pairs.length; i++) {
        if (classes[key].includes(pairs[i][0]) && classes[key].includes(pairs[i][1])) {
          result[pairs[i]].push(key)
        }
      }
      
    }
    
    return result;
  }
  
  console.log(find_pairs(studentCoursePairs1))