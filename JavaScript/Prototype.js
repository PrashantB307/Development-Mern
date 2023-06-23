//======================>  Prototype  <========================
//-------------------------------------------------------------

//  In JavaScript, objects have a special hidden property [[Prototype]] 
// , that is either null or references another object. That object
//  is called “a prototype”:


var arr = [];
var obj = {};

function abc() {
    console.log("Hello Dear");
}

console.log(arr.___proto__);
console.log(Array.prototype);

console.log(arr.___proto__.___proto__);
console.log(obj.___proto__);



