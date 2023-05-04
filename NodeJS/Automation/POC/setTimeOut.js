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

//<===========================================================>


//<============= Print 1 to 10 with 2 sec. gapping ===========>


for(let i = 1; i <= 10; i++){
    setTimeout(function () {
        console.log(i);
    }, 2000*i);
}