
// <===============    CallBack   ==================>
//===================================================

//    When a function can be passed as an argument , and it 
// can be called later in time, then this function is 
// known as 'Call Back' function.

// CallBack is ==> Synchronous and Single Threaded.



// Single Threaded  --> It  proccess one command at one time.



// <================    CallBack Hell   ==================>
//---------------------------------------------------------


const fs = require("fs");

fs.readFile("f1.txt", function cb1(err, res){
   if(err){
      console.log(err);
   }else{
      console.log(res + "");
      fs.readFile("f2.txt", function cb2(err, res){
         if(err){
            console.log(err);
         }else{
            console.log(res + "");
            fs.readFile("f3.txt", function cb3(err, res){
               if(err){
                  console.log(err);
               }else{
                  console.log(res + "");
                  console.log("All Data Printed");
               }
            })
         }
      });
   }
});



// 1st way to Overcome the CallBack Hell is separate to all CB functions
//----------------------------------------------------------------------

fs.readFile("f1.txt", cb1);

function cb1(err, res){
   if(err){
      console.log(err);
   }else{
      console.log(res + "");
      fs.readFile("f2.txt", cb2);
   }
}

function cb2(err, res){
   if(err){
      console.log(err);
   }else{
      console.log(res + "");
      fs.readFile("f3.txt", cb3);
   }
}

function cb3(err, res){
   if(err){
      console.log(err);
   }else{
      console.log(res + "");
      console.log("All Data Printed");
   }
}




// 2nd way is parallel using CallBack function.
//---------------------------------------------

fs.readFile("f1.txt", cb);
fs.readFile("f2.txt", cb);
fs.readFile("f3.txt", cb);

function cb(err, res){
   if(err){
      console.log(err);
   }else{
      console.log(res + "");
   }
}



// 3rd way is use Promises.
//------------------------

const fs = require("fs");

let f1readPromise = fs.promises.readFile("f1.txt");

function cb1(data) {
   console.log(data + "");
   let f2readPromise = fs.promises.readFile("f2.txt");
   return f2readPromise;
}

function cb2(data) {
   console.log(data + "");
   let f3readPromise = fs.promises.readFile("f3.txt");
   return f3readPromise;
}
function cb3(data) {
   console.log(data + "");
  console.log("Read all files.");
}

f1readPromise
.then(cb1)
.then(cb2)
.then(cb3)
.catch(function (err) {
   console.log(err)
});