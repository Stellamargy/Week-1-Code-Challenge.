//Challenge 1
//studentGradeGenerator ,a function that takes marks as a parameter
//It tests the following conditions :  A > 79, B > 60 to 79, C > 59 to 49, D > 40 to 49, E > less 40.



let p = document.querySelector("#grade");
let marks = prompt("Put marks");
if (marks >= 80) {
  p.innerHTML = "A";
} else if (marks >= 70) {
  p.innerHTML = "B";
} else if (marks >= 60) {
  p.innerHTML = "C";
} else if (marks >= 50) {
  p.innerHTML = "D";
} else if (marks >= 40) {
  p.innerHTML = "E";
}
