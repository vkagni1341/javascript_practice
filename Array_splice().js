/*
                  Araay splice()
   This method adds and/or removes array elements.
   This  method overwrites the original array.


*/
const num = [1,2,5,8,9];
// num.splice(2,5, 10,20);
// console.table(num);

console.log(`${num} is the Array number  `);
console.log(typeof(num));
//Removing the element form array
numm = num.splice(1,3);
console.table(numm);
console.table(num);
//Adding the element using the splice()
num.splice(2,1, 10,20);
console.table(num);

