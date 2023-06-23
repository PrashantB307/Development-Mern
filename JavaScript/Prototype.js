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


let user = {
    name : "Pawan",
    sayHi : function () {
        console.log(this.name);
    }
};

let admin = {
    role : "admin",
    age : 30
};

console.log(user.name);    // ====> Pawan
user.sayHi();   // ====> Pawan

admin.__proto__ = user;
console.log(admin.name);   // ====> Pawan

admin.name = "Prashant"; 
console.log(admin.name);   // ====> Prashant
admin.sayHi();  // ====> Prashant

console.log(user.name);   // ====> Pawan




