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
    }
   ];
//when does PROG200 start?
function Prog200(arrayValue) {
    if (arrayValue.CourseId == "PROG200") {
        return true;
    } else {
        return false;
    }
}

   let Prog200StartDate = courses.find(Prog200);
   if (Prog200StartDate) {
    console.log(Prog200StartDate.StartDate);
   } 


//what is the title of the PROJ500?
function findTitle500(arrayValue) {
    if (arrayValue.CourseId == "PROJ500") {
        return true;
    } else {
        return false;
    }
}

    let pROJ500Title = courses.find(findTitle500);
    if (pROJ500Title) {
        console.log(pROJ500Title.Title)
    }
    
//what are the titles of the courses that are 50$ or less
function findCoursesUnder$50(arrayValue) {
    if (arrayValue.Fee <= 50) {
        return true;
    } else {
        return false;
    }
}

let coursesUnder$50 = courses.filter(findCoursesUnder$50)
if (coursesUnder$50) {
    console.log(coursesUnder$50.Title)
}

//what classes meet in classroom1?
function meetInClassRoom1(courses) {
    return courses.Location == "Classroom 1"
    
}

let classroom1courses = courses.filter(meetInClassRoom1);
console.log(classroom1courses.Title);