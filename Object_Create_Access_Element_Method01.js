/*
  Object create and acess the data of object
  
*/
// 1 Type
const obj1 = 
{
  name : "vipul",
  city : "rewa",
  age : 22,
  frnd : ["krish","jai","sai","ram"]
}
console.log(obj1["city"]);
console.log(`Namw = ${obj1.name}, City = ${obj1.city}, Age = ${obj1.age}, Friend's = ${obj1.frnd}  Thank's`);


// Symbool 
const syn1 = Symbol("Key1");

const obj2 =
{
    name : "Ram",
    age : 25,
    [syn1] :"Agni"
}
console.log(obj2 [syn1]);

console.log(obj2 );
console.log(typeof [syn1]);