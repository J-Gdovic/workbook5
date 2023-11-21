let numbers = [100, 20, 55, 67, 11, 2, 88];

//long version
// function compare(a,b) {
//     if (a < b) return -1; // right order
// else if (a == b) return 0;
// else return 1; // swap, wrong order
// }
// numbers.sort(compare);
// console.log(numbers);

//shorter version
// function compare(a,b) {
// return a-b;
// }
// numbers.sort(compare);
// console.log(numbers);

//shortest version ....dont need : let number = before function
numbers.sort((a, b) => a - b);
console.log(numbers);