

//  fs ----> File System Module


const fs = require("fs");

let res = fs.appendFileSync("f1.txt", "Hello i am f1 file");
//--> appendFileSync appends data into a file if file is not present, it
//    creates the file and then append the data.
fs.appendFileSync("f1.txt", "\nYou are Smart");
console.log(res);

// let data = fs.readFileSync("f1.txt");
// console.log(data + "");

let data = fs.readFileSync("f1.txt", "utf-8");
console.log(data);