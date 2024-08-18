/*
Array Storing and merging 
flat()
*/
//Type First
const arr1 = [1,2,3,[4,5],6,[7,[8,9],10],11];
console.log(arr1);

const arr2 = arr1.flat(Infinity);
console.log(arr2);