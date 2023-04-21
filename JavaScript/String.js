

//String is a sequence of characters//

var str = "Hello my name is Prashant";

console.log(str);

console.log(str[10]);

console.log(str.length);

                   //Methods -->

              //Extractions Methods

//  SLICE method    slice(start idx , end idx);

let slicestr = str.slice(10,25);
console.log(slicestr);

let slicestr2 = str.slice(17); //17 idx ke baaad ka sb cut hoga 
console.log(slicestr2);

//  SUB-STRING method    substr(start idx , end idx);

let ans = str.substr(10 , 19);
console.log(ans);
console.log(str);

               
 // Replacing ---> 

str = "Prashant Bhardwaj"; 
console.log(str);


 // upper case and lower case changing =====>

console.log(str.toLowerCase());
console.log(str.toUpperCase());      


//  Concatination Method --->

let fstr = "You guys ";
let sstr = "are Smart ";

let Concatinatedstr = fstr + sstr;
console.log(Concatinatedstr);

let concatstr = fstr.concat(sstr , "are NOT?");
console.log(concatstr);


//  Trim Method ---->  (Remove all the whitespaces)

let trimstr = "     Hello";
console.log(trimstr.length);
console.log(trimstr.trim());
trimstr = trimstr.trim();
console.log(trimstr.length);


//  Splits Methods =========>

var str = "Hello my name is Prashant";
console.log(str);

var a = str.split(" ");
console.log(a);
//====> [ 'Hello', 'my', 'name', 'is', 'Prashant' ]


var a = str.split("");
console.log(a);
// [
//       'H', 'e', 'l', 'l', 'o', ' ',
//       'm', 'y', ' ', 'n', 'a', 'm',
//       'e', ' ', 'i', 's', ' ', 'P',
//       'r', 'a', 's', 'h', 'a', 'n',
//       't'
//  ]