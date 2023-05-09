
//-------------------> Promise <--------------------
//==================================================

function f() {
    return new Promise(function (resolve, reject) {
        resolve ("Hi");
    });
}

console.log(f());  //===> Promise { 'Hi' }



//-------------------> async <-----------------------
//====================================================

//===> The word “async” means one a function always returns
//      a promise.

async function f() {
    return "Hello"
}
console.log(f());   //===> Promise { 'Hello' }



//-------------------> await <------------------------
//====================================================

//===> The keyword await makes JS wait until the promise settles
//     and return its results.
//     ( Wait until the Promise resolve )

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout (() => resolve("done"), 5000)
    });

    let result = await promise;
    console.log("Hello");
    console.log(result);
}
f();
console.log("YOLO");

//================> YOLO
//(after 5 sec) ==> Hello Done