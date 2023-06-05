
//==================> Important Interview <===================
//------------------------------------------------------------


// ======> Qu. 1 
//---------------

let arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
let obj = {};
for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = obj[arr[i]] == undefined ? 1 : obj[arr[i]] + 1;
}

console.log(obj);

// =====> { '1': 4, '2': 2, '3': 1, '4': 2, '5': 1, '6': 1 }



//======================> Object.assign( ) <======================
//----------------------------------------------------------------

let user = {
    name: "Pawan",
    age: 22
}

let clone = {};

Object.assign(clone, user);
//console.log(clone);   //  { name: 'Pawan', age: 22 }

clone.name = "Prashant";

// console.log(clone);  //===>  { name: 'Prashant', age: 22 }
// console.log(user);   //===>  { name: 'Pawan', age: 22 }

Object.assign(clone, user, {name: "Bhardwaj"});
console.log(clone);     //===>  { name: 'Bhardwaj', age: 22 }

Object.assign(clone, user, {full_name: "Prashant Bhardwaj"});
console.log(clone);     //===> { name: 'Pawan', age: 22, full_name: ' Prashant Bhardwaj' }



//=====================> Nested Cloning <=======================
//--------------------------------------------------------------

let user1 = {
    name : "Pawan",
    age : 22,
    sizes : {
        height : 180,
        weight : 70
    }
};

console.log(user1.sizes);   //===>  { height: 180, weight: 70 }

let clone1 = {};
// This is not deep cloning , because reference to size identifier is same in
// in both clone and user obj.

Object.assign(clone1, user1);

console.log(clone1);   //===>   { name: 'Pawan', age: 22, sizes: { height: 180, weight: 70 } }

clone1.sizes.height = 165;
// This is Deep cloning.

console.log(clone1);   //===>   { name: 'Pawan', age: 22, sizes: { height: 165, weight: 70 } }
console.log(user1);    //===>   { name: 'Pawan', age: 22, sizes: { height: 165, weight: 70 } }



//=====================> Flatten an Object <=======================
//-----------------------------------------------------------------

let flattenedObj = {
    "name" : "Pawan",
    "sizes.height" : 182,
    "sizes.weight" : 50
}


//====================> "This" Interview types <====================
//------------------------------------------------------------------

//-------> Rules <--------
//1. The value of this is evaluated during the run time depending on the context.
//2.


//========> Qu.1

function type1 () {
    console.log(this.name);
}

var name = "P1";

type1();   //===>  undefined


//========> Qu.2

function type2 () {
    console.log(this.lname);
}

var lname = "kumar";

var obj1 = {
    lname : "Bhardwaj",
    type2
}

obj1.type2();    //===>  Bhardwaj


