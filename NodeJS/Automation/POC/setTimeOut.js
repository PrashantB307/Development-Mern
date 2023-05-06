// {
//     function yolo() {
//         var a = 10;
//         function cb (err, res) {
//             if(err){
//                 console.log(err);
//             }
//             else{
//                 console.log("Hello How are You ?");
//             }
           
//         }
//         // function to be executed ( CallBack fun) , time(mili sec.)
//         //after which cb fun.  to be axecuted.
//         setTimeout(cb, 4000);  // 4000 ms  ==> 4sec
//         console.log(a);
//     }
    
//     yolo();
    
//     let b = 100;
//     console.log(b);
// }

// const request = require("request");
// let url = "https://www.worldometers.info/coronavirus/";
// function yolo () {
//     var a = 10;
//     function cb(err, res) {
//         if(err){
//             console.log(err);
//         }else{
//             console.log("Hello how are you ?");
//             console.log("statusCode is ");
//         }
//     }
//     request(url, cb);
//     console.log(a);
// }

// yolo();
// let b = 100;
// console.log(b);

// //<===========================================================>


// //<============= Print 1 to 10 with 2 sec. gapping ===========>


// for(let i = 1; i <= 10; i++){
//     setTimeout(function () {
//         console.log(i);
//     }, 2000*i);
// }

// //<================ Another Way (Var) ==================>

// for(var i = 1; i <= 10; i++){
//     function outer(a) {
//         setTimeout(function () {
//             console.log(a);
//         }, 2000 * a);
            
//     }

//     outer(i);
// }

// //<================ Another Way (Var) ==================>

// for(var i = 1; i <= 10; i++){
//     function cb(a) {
//         console.log(a);
//     };
//     setTimeout( cb, 2000 * i, i);
// }


// //<=======================================================>


// function a() {
//     let x = 100;
//     function y() {
//         return x;
//     }
//     return y;
// }

// let fn = a();
// let ans = fn();
// console.log(ans); ///====>  100


// //<=======================================================>


// console.log("Befor");
// setTimeout( function () {
//     console.log("Time Over");
// }, 5000);
// console.log("After");

// //======> Before
//      //   After
//      //   (After 5 sec) Time over


//<===================  Fecth ()  API  ======================>
//------------------------------------------------------------

console.log("Before");
setTimeout(function () {
    console.log("Time Over");
}, 1000);
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(function (response) {
        return response.json()
    })
    .then(function (json) {
        console.log(json) 
    });
console.log("Before");  
//========> { userId: 1, id: 1, title: 'delectus aut autem', completed: false }