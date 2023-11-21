let products = [
    { prodId: 2, name: "Notepads (12 pk)", price: 12.29 },
    { prodId: 12, name: "Black Pens (12 pk)", price: 5.7 },
    { prodId: 22, name: "Stapler", price: 12.79 },
  ];
  


//sort by price
console.log("sorted by price ascending order:");
products.sort((productA, productB) => productA.price - productB.price);
console.log(products);