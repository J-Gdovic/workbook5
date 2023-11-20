let date = new Date();
let month = date.getMonth()+1;
let monthName = " ";

switch (month) {
  case 1:
    monthName = "January";

    break;
  case 2:
    monthName = "Febuary";
    break;
  case 11:
    monthName = "November";
    break;

  default:
    break;
}

console.log(monthName);