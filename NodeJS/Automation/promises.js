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