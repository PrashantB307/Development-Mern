
//-------------------> Promise <--------------------
//==================================================

function f() {
    return new Promise(function (resolve, reject) {
        resolve ("Hi");
    });
}

console.log(f());  //===> Promise { 'Hi' }



//-------------------> asyncAwait <-------------------
//====================================================

async function f() {
    return "Hello"
}
console.log(f());   //===> Promise { 'Hello' }
