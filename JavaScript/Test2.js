//<--------------- Question 1 ------------------>
//===============================================

const num = 10;
console.log(num + 5);   //===> 15
let a = 6;
a = a + num;
console.log(num - a);   //===> -6


//<--------------- Question 2 ------------------>
//===============================================

let j = 1;
{ let j = 2;
    { let j = 3;
        { let j = 4;
            console.log(j);  //===> 4
        }
        console.log(j);  //===> 3
    }
    console.log(j);  //===> 2
}
console.log(j);  //===> 1
 

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

console.log("Line 4: ", h);  //===> Line 4:  undefined
var h;
console.log("Line 6: ", h);  //===> Line 6:  undefined
h = 10;
console.log("Line 8: ", h);  //===> Line 8:  10
 

//<--------------- Question 5 ------------------>
//===============================================

const f = 10;
const g = 20;
g = g + 10;
console.log(f + g);  //===> Error (b cann't be re-inisilise)


//<--------------- Question 6 ------------------>
//===============================================

var e ="Bhardwaj";
var result = e.substring(3, 7);
console.log(result);   //===> rdwa


// <--------------- Question 7 ------------------>
// ===============================================

var A = "hello";
var sum = 0;
for(var i = 0; i < A.length; i++){
    sum += (A[i] - "a");
}
console.log(sum);  //===> NaN


//<--------------- Question 8 ------------------>
// ===============================================

let obj1 = {
    fName : "Pawan",
    sName : "Bhardwaj",
    age : 22,
    city : "Varanasi"
}
delete obj1.age;
console.log(obj1);
//===> { fName: 'Pawan', sName: 'Bhardwaj', city: 'Varanasi' }


//<--------------- Question 9 ------------------>
// ===============================================

var c = 29;
var d = c = 30;
console.log(c);  //===> a = 30 


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

var n1 = 10;
let n2 = 10;
{
    var n1 = 20;
    let n2 = 20;
    console.log("num1:", n1, "num2:", n2);
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