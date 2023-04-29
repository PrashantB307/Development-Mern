const fs = require('fs');

console.log("before");

//---> Synchronous Working <----
//==============================

//let data = fs.readFileSync("f1.txt");
//console.log(data + "");

//----> Asynchronous Working<-----
//================================

// fs.readFile("f1.txt", cb);
// // function cb(err, data){
// //     if(err){
// //         console.log(err);
// //     }
// //     else console.log(data + "");
// // }


// Promising Working --->
//=======================

// A promise is basically an advancement of callbacks in Node.
//   In other words, a promise is a JavaScript object which is
//   used to handle all the asynchronous data operations. 
//   While developing an application you may encounter that you
//    are using a lot of nested callback functions. 

let promiseThatFileRead = fs.promises.readFile("f1.txt");
console.log(promiseThatFileRead);
promiseThatFileRead.then(printData);
promiseThatFileRead.catch(printError);

console.log("after");

function printData(data){
    console.log("Promise is Fulfilled");
    console.log(data + "");
}

function printError(err){
    console.log(err);
}