"use strict";

let courses = [
  {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
  },
  {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
  },
  {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
  },
  {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
  },
];
// FIND ONE COURSE using for loop

// for (const course of courses) {
//   if (course.CourseId == "PROG400") {
//     console.log(course);
//   }
// }

//Find one course USING .find

//the long version of the code
// function isPROG400(course) {
//   if (course.CourseId == "PROG400") {
//     return true;
//   }else{
//     return false;
//   }
// }
// let foundCurse = courses.find(isPROG400);
// console.log(foundCurse);

// shorten code:
function isPROG400(course) {
  return course.CourseId == "PROG400";
}
// let foundCurse = courses.find(isPROG400);
// console.log(foundCurse);

//arrow function

() => {};
() => {};
() => {};
() => {};

let foundCurse = courses.find((course) => course.CourseId == "PROG400");
console.log(foundCurse);
