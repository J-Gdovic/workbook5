"use strict";
let cars = ["Saab", "Volvo", "BMW", "subaru", "Audi", "Porsche", "plymouth"];

cars.sort((makeA, makeB) => {
  makeA = makeA.toLowerCase();
  makeB = makeB.toLowerCase();
  if (makeA < makeB) return -1;
  else if (makeA == makeB) return 0;
  else return 1;
});

cars.forEach(carMake => console.log(carMake));

