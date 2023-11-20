//normal function
function bob(a) {
  return a + 100;
}
let result = bob(10);
console.log(result);

// arrow function
const bob2 = (a) => a + 100;
let result2 = bob(10);
console.log(result2);

//another exampl

// normal function
// function add(a,b) {
//     return a+b;
// }

// console.log(add(2,2));

//arrow function
// const function name = (params) => "what you want to return";
const add = (a, b) => a + b;

console.log(add(2, 2));

//normal function example
function buildTableRow(park) {
  let tr = parksTableBody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = park.LocationName;

  let td2 = tr.insertCell();
  td2.innerText = park.State;

  let td3 = tr.insertCell();
  td3.innerText = park.Phone;
}

const buildTableRow = (park) => {
  let tr = parksTableBody.insertRow();

  let td1 = tr.insertCell();
  td1.innerText = park.LocationName;

  let td2 = tr.insertCell();
  td2.innerText = park.State;

  let td3 = tr.insertCell();
  td3.innerText = park.Phone;
};
