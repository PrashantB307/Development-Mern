

//====================>   Array Destructuring   <====================
//-------------------------------------------------------------------

let name = ["Prashant", "Kumar", "Bhardwaj"];

let [firstName, middlename] = name;
console.log(firstName);    //=====> Prashant
console.log(middlename);   //=====> Kumar

let [ , , surname] = name;
console.log(surname);      //=====> Bhardwaj


let name2 = ["Hi", ["I", "am"], "P1"];
let [a,b,c] = name2;

console.log(a + " "+ b + " " + c);  // ===> Hi I,am P1


let family = ["mummy"];
let [mom, dad = "papa"] = family;  // here dad has default value
console.log(mom);   //=====> mummy
console.log(dad);   //=====> papa


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


let [fName, lname] = "Prashant Bhardwaj".split(' ');
console.log(fName);    //=====> Prashant
console.log(lname);    //=====> Bhardwaj


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

