

// 1) node wcat.js filepath ==> display the contents of a file in terminals

let inputArr = process.argv.slice(2);
//console.log(input);
// [
//   'C:\\Program Files\\nodejs\\node.exe',
//   'd:\\Development Mern\\Node JS\\WCAT\\WCAT.JS'
// ]  


// 2) node wcat.js filepath1 filepath1 filepath1 ==> display the content of all files in terminals
                                                //   in concatinate

let  filesArr = [];
for(let i = 0; i < inputArr.length; i++){
    filesArr.push(inputArr[i]);
}                              

console.log(filesArr); 