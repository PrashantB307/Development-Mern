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
 

// //<--------------- Question 3 ------------------>
// //===============================================

// var num1 = 10;
// let num2 = 10;
// {
//     var num1 = 20;
//     let num2 = 20;
// }
// console.log("num1:", num1, "num2:", num2);
// //===> num1: 20 num2: 10


// //<--------------- Question 4 ------------------>
// //===============================================

// console.log("Line 4: ", a);  //===> Line 4:  undefined
// var a;
// console.log("Line 6: ", a);  //===> Line 6:  undefined
// a = 10;
// console.log("Line 8: ", a);  //===> Line 8:  10
 

// //<--------------- Question 5 ------------------>
// //===============================================

// const a = 10;
// const b = 20;
// b = b + 10;
// console.log(a + b);  //===> Error (b cann't be re-inisilise)


// //<--------------- Question 6 ------------------>
// //===============================================

// var a ="Bhardwaj";
// var result = a.substring(3, 7);
// console.log(result);   //===> rdwa


// // <--------------- Question 7 ------------------>
// // ===============================================

// var a = "hello";
// var sum = 0;
// for(var i = 0; i < a.length; i++){
//     sum += (a[i] - "a");
// }
// console.log(sum);  //===> NaN


// //<--------------- Question 8 ------------------>
// // ===============================================

// let obj1 = {
//     fName : "Pawan",
//     sName : "Bhardwaj",
//     age : 22,
//     city : "Varanasi"
// }
// delete obj1.age;
// console.log(obj1);
// //===> { fName: 'Pawan', sName: 'Bhardwaj', city: 'Varanasi' }


// //<--------------- Question 9 ------------------>
// // ===============================================

// var a = 29;
// var b = a = 30;
// console.log(a);  //===> a = 30 


//<--------------- Question 10 ------------------>
// ===============================================

(function (a) {
    return (function () {
        console.log(a);   //===> 12
        a = 6;
    }) ()
}) (12);


//<--------------- Question 11 ------------------>
// ===============================================

var num1 = 10;
let num2 = 10;
{
    var num1 = 20;
    let num2 = 20;
    console.log("num1:", num1, "num2:", num2);
}
//===> num1: 20 num2: 20


//<--------------- Question 12 ------------------>
// ===============================================

if(12 == "12"){
    console.log(true);
}else{
    console.log(false);
}
//===> true