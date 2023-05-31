
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