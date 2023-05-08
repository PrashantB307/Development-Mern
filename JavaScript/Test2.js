//<--------------- Question 1 ------------------>
//===============================================

// const num = 10;
// console.log(num + 5);   //===> 15
// let a = 6;
// a = a + num;
// console.log(num - a);   //===> -6


// //<--------------- Question 2 ------------------>
// //===============================================

// let a = 1;
// { let a = 2;
//     { let a = 3;
//         { let a = 4;
//             console.log(a);  //===> 4
//         }
//         console.log(a);  //===> 3
//     }
//     console.log(a);  //===> 2
// }
// console.log(a);  //===> 1
 

//<--------------- Question 3 ------------------>
//===============================================

var num1 = 10;
let num2 = 10;
{
    var num1 = 20;
    let num2 = 20;
}
console.log("num1:", num1, "num2:", num2);
//===> num1: 20 num2: 10


//<--------------- Question 4 ------------------>
//===============================================

console.log("Line 4: ", a);  //===> Line 4:  undefined
var a;
console.log("Line 6: ", a);  //===> Line 6:  undefined
a = 10;
console.log("Line 8: ", a);  //===> Line 8:  10
 