"use strict";
let products = [
  { prodId: 2, name: "Notepads (12 pk)", price: 12.29 },
  { prodId: 12, name: "Black Pens (12 pk)", price: 5.7 },
  { prodId: 22, name: "Stapler", price: 12.79 },
];

//sort by product name

products.sort((productA, productB) => {
  if (productA.name < productB.name) return -1;
  else if (productA.name == productB.name) return 0;
  else return 1;
});
// console.log(products);
products.forEach((product) => console.log(product.name));

console.log("-------------------------------");

//sort by price descending
products.sort((productA, productB) => productB.price - productA.price);
// console.log(products);
products.forEach((product) => console.log(product.price));

console.log("-------------------------------");

//sort by price ascending
products.sort((productA, productB) => productA.price - productB.price);
// console.log(products);
products.forEach((product) => console.log(product.price));
