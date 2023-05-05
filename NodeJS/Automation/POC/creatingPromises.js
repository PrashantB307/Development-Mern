
//-----> Creating our Promises <------
//====================================

let myPromise = new Promise( function (resolve, reject) {
    let num1 = 1;
    let num2 = 2;
    let string = "values is equal to 2";
    if(num1 + num2 == 2){
        resolve(string);
    }
    else{
        reject("No, values are not equal");
    }
})
 
myPromise.then(function (string) {
    console.log("In.then ", string);
})
.catch(function (err) {
    console.log(err);
});