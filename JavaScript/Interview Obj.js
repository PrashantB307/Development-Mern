
//==================> Important Interview <===================
//------------------------------------------------------------


// ======> Qu. 1 
//---------------

var arr = [1, 4, 2, 3, 2, 4, 1, 5, 6, 1, 1];
let obj = {};
for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = obj[arr[i]] == undefined ? 1 : obj[arr[i]] + 1;
}

console.log(obj);

// =====> { '1': 4, '2': 2, '3': 1, '4': 2, '5': 1, '6': 1 }



//======================> Object.assign( ) <======================
//----------------------------------------------------------------

let user = {
    name: "Pawan",
    age: 22
}

let clone = {};

Object.assign(clone, user);
//console.log(clone);   //  { name: 'Pawan', age: 22 }

clone.name = "Prashant";

// console.log(clone);  //===>  { name: 'Prashant', age: 22 }
// console.log(user);   //===>  { name: 'Pawan', age: 22 }

Object.assign(clone, user, {name: "Bhardwaj"});
console.log(clone);     //===>  { name: 'Bhardwaj', age: 22 }

Object.assign(clone, user, {full_name: "Prashant Bhardwaj"});
console.log(clone);     //===> { name: 'Pawan', age: 22, full_name: ' Prashant Bhardwaj' }



//=====================> Nested Cloning <=======================
//--------------------------------------------------------------

let user1 = {
    name : "Pawan",
    age : 22,
    sizes : {
        height : 180,
        weight : 70
    }
};

console.log(user1.sizes);   //===>  { height: 180, weight: 70 }

let clone1 = {};
// This is not deep cloning , because reference to size identifier is same in
// in both clone and user obj.

Object.assign(clone1, user1);

console.log(clone1);   //===>   { name: 'Pawan', age: 22, sizes: { height: 180, weight: 70 } }

clone1.sizes.height = 165;
// This is Deep cloning.

console.log(clone1);   //===>   { name: 'Pawan', age: 22, sizes: { height: 165, weight: 70 } }
console.log(user1);    //===>   { name: 'Pawan', age: 22, sizes: { height: 165, weight: 70 } }



//=====================> Flatten an Object <=======================
//-----------------------------------------------------------------

let flattenedObj = {
    "name" : "Pawan",
    "sizes.height" : 182,
    "sizes.weight" : 50
}


// ====================> "This" Interview types <====================
// ------------------------------------------------------------------

// -------> Rules <--------
// 1. The value of this is evaluated during the run time depending on the context.
// 2.


//========> Qu.1

function type1 () {
    console.log(this.name);
}

var name = "P1";

type1();   //===>  P1


//========> Qu.2

function type2 () {
    console.log(this.lname);
}

var lname = "kumar";

var obj1 = {
    lname : "Bhardwaj",
    type2
}

obj1.type2();    //===>  Bhardwaj


//========> Qu.3

var food = "Pizza";

var obj2 = {
    food : "Pasta",
    eat () {
        console.log("I am eating " + this.food);
    }
}

var foo = obj2.eat;

foo();     //===> I am eating Pizza


//========> Qu.4

var length = 1;
function square () {
    let cb = function () {
        console.log(this.length * this.length);
    }
    setTimeout(cb, 2000);
}

var obj3 = {
    length : 3,
    square
};

obj3.square();   //===> 1


//========> Qu.5

// Swap 2 numbers without using temp variables :-

let num1 = 10;
let num2 = 20;

[num1, num2] = [num2, num1];

console.log( "num1 = " + num1 );   // ===> num1 = 20
console.log( "num2 = " + num2 );   // ===> num2 = 10
 

// =======> Another way ( only for numbers ) ------>

let n1 = 10;
let n2 = 20;
 
n1 = n1 + n2;
n2 = n1 - n2;
n1 = n1 - n2;

console.log( "n1 = " + n1 );   // ===> n1 = 20
console.log( "n2 = " + n2 );   // ===> n2 = 10


//========> Qu.6

// Sort the array using setTimeout() :-

const ar = [10, 20, 1, 5, 8, 50, 100];
for(let num of ar) {
    setTimeout( () => {
        console.log(num);
    }, num);
};
// =====> 1 5 8 10 20 50 100


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

//---> Qu. 1 ;

// Lucky Seven ==> If Sum of 3 consicutive index are 7 print true 
//                 else print false

const ab = [2, 3 ,1, 3, 2, 2];
let i = 0, j = 1, k = 2;
while(k < ab.length){
    if((ab[i] + ab[j] + ab[k]) == 7){
        console.log(true);
        break;
    }else{
        console.log(false);
        break;
    }
    i++,j++,k++;
}


// XXXXXXXXXXXXXXXXXXXXXXXX=====>  7 Apr 2024  <=====XXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// 1. Reverse each word of the sentence.

var str = "mai hu giyan mera gala h bhut surila";
var newStr = str.split(" ").map(function(word) {
    return word.split("").reverse().join("");
});

console.log(newStr.join(" "));  // ==> iam uh nayig arem alag h tuhb alirus  


// 2. How to check if an Object is an Array or not?

function checkArray(arr){
    return Array.isArray(arr);
}

console.log(checkArray([]));  // ===> true
console.log(checkArray({}));  // ===> false


// 3. How to empty an Array in JavaScript?

var arr6 = [1,2,3,4,5,6];

arr6.length = 0;

console.log(arr6);  // ===> []
console.log(arr6.length);  // ===> 0 


// 4. How would you check a Number is an Integer or Not ?

function isInteger(val){
    if(val % 1 === 0){
        return "Integer"
    }else{
        return "Not Integer";
    }
}

console.log(isInteger(123));   // ===>  Integer
console.log(isInteger(12.3));  // ===>  Not Integer


// 5. Copy the Array like this --> [1, 2, 3] ==> [1, 2, 3, 1, 2, 3]

function duplicate(arr){
    return arr.concat(arr);
}

var arr7 = [1,2,3];
console.log(duplicate(arr7));  // ===>  [ 1, 2, 3, 1, 2, 3 ]  


// 6. Write a function for reverse a number?

function reverse(num){
    var ans = Number(num.toString().split("").reverse().join(""));
    return ans;
}

function reverse2(num){
    var ans = 0;
    while(num > 0){
        var rem = num % 10;
        ans = ans * 10 + rem;
        num = Math.floor(num / 10);
    }

    return ans;
}

var num = 12345;
console.log(reverse(num));   // ===> 54321
console.log(reverse2(num));  // ===> 54321


// 7. String Palindrome or not ? 

function isPalindrome(str){
    var palin = str.split("").reverse().join("");
    if(palin === str){
        return true;
    }else{
        return false;
    }
}

console.log(isPalindrome("kanak"));    // ==> true
console.log(isPalindrome("panaap"));   // ==> false


// 8. Sort the alphabet of the string.

function sorting(str){
    return str.split("").sort().join("");
}

console.log(sorting("pawan"));  // ==> aanpw


// 9. Capitalise the 1st character of each word.

function capitalise(str){
    var allWord = str.split(" ").map(function(word) {
        return word.charAt(0).toUpperCase() + word.substring(1);
    });

    return allWord.join(" ");
}

console.log(capitalise("hello bhai kaise ho"));  //===> Hello Bhai Kaise Ho


// 10. Count the occurance of all character in string.

function occurance(str) {
    var occ = {};
    str.split("").forEach(ch => {
        if(occ.hasOwnProperty(ch) === false){
            occ[ch] = 1;
        }else{
            occ[ch]++;
        }
    }); 

    return occ;
}

console.log(occurance("pawan"));  //===>  { p: 1, a: 2, w: 1, n: 1 }
console.log(occurance("palindrimic"));  //===> { p: 1, a: 1, l: 1, i: 3, n: 1, d: 1, r: 1, m: 1, c: 1 }


// 11. Add all no. of arr.

var arr = [1,2,3,4,5,6,7,8,9];
var sum = 0;
arr.forEach(n => {
    sum += n;
});

console.log(sum);  // ===> 45


// 12. Add only number from the Array.

function addNum(arr){
    var sum = 0;
    arr.map(ele => {
        if(typeof ele === "number"){
            sum += ele;
        }
    });

    return sum;
}

console.log(addNum(["sdaf", 45, "hg", 543, "gdfg", 43]));  // ==> 631


// 13. Add only "male" person from the Array.

var arr = [
    {name : "pawan", gender : "male"},
    {name : "rishita", gender : "female"},
    {name : "raishi", gender : "male"},
    {name : "shivani", gender : "female"},
    {name : "shivam", gender : "male"}
]

var newArr = arr.filter(ele => {
    if(ele.gender === "male"){
        return ele;
    }
});

console.log(newArr);

// [
//     { name: 'pawan', gender: 'male' },
//     { name: 'raishi', gender: 'male' },
//     { name: 'shivam', gender: 'male' }
// ]


// 14. Clone an Array.

function clone(arr){
    return [...arr];
}

function clone2(arr) {
    var newArr = [];
    arr.forEach(e => {
        newArr.push(e);
    });

    return newArr;
}

var cloneArr = clone([1,2,3,4,5]);
console.log(cloneArr);  // ===> [ 1, 2, 3, 4, 5 ]
console.log(clone2([1, 2, 3, 4]));  // ===> [ 1, 2, 3, 4 ]


//15. Create a Function that takes arguments and return its Type.

function type(args) {
    return typeof(args);
}

console.log(type(5));     // ==> number
console.log(type("SGfss"));  // ==> string
console.log(type([34,6,43,23]));  //==> object
console.log(type(false)); // ==> boolean


// 16. Print the Array elements from starting till N.

function rangeStarting(args, n = 1) {
    if(n < args.length){
        for(var i = 0; i < n; i++){
            console.log(args[i]);
        }
    }else{
        console.log("Index Out of Bound");
    }
}

rangeStarting([2,3,4,5], 3);  // 2,3,4


// 17. Print the Array elements from last till N.

function rangeLast(args, n = 1) {
    if(n < args.length){
        for(var i = 0; i < n; i++){
            console.log(args[args.length - 1 - i]);
        }
    }else{
        console.log("Index Out of Bound");
    }
}

rangeLast([1,2,3,4,5], 4);  // 5 4 3 2


// 18. Find the most frequent  item in the array.

function maxFreq(arr) {
    var freq = {};
    arr.forEach(function (elem) {
        if(freq.hasOwnProperty(elem)){
            freq[elem]++;
        }else{
            freq[elem] = 1;
        }
    });

    var ans = Object.keys(freq).reduce(function(a, b) {
        return freq[a] > freq[b] ? a : b;
    })

    console.log(ans, freq[ans]);
}

maxFreq([4,2,3,4,5,2,4,2,3,4,6,7,6,5,4]);

