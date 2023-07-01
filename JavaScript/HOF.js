
//==================> Map Function <=====================
//-------------------------------------------------------

let arr = [1, 2, 3, 4];
arr = arr.map(function (ele) {
    return ele * ele;
})

console.log(arr);  //----> [ 1, 4, 9, 16 ]



// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//===================>   High Order Function  <===================
//--------------------------  ( H.O.F )  -------------------------

// Function which take other func. as argument.
//                   or
// Function which returns a func. is called HOF.


// function calculator is a HOF
function calculater (operator, a, b) {
    if(operator == "+"){
        return function add() {
            return a + b;
        };
    }
}

console.log("Hello");      // ====> Hello
let fn =  calculater("+", 3, 4);
let ans = fn();
console.log(ans);       // ====> 7


// Functional Programming ======>
//-------------------------------

const arr1 = [2, 4, 6, 8, 7, 9];

// Calculate the Area of Squares
let areaOfSquare = function(arr1) {
    let res = [];
    for(let i = 0; i < arr1.length; i++){
        res.push(arr1[i] * arr1[i]);
    }

    return res;
}

console.log(areaOfSquare(arr1));     
// ====> [ 4, 16, 36, 64, 49, 81 ]


// Calculate the Perimeter of Squares

let periOfSquare = function (arr1) {
    let res = [];
    for(let i = 0; i < arr1.length; i++){
        res.push(4 * arr1[i]);
    }

    return res;
}

console.log(periOfSquare(arr1));
// ====>  [ 8, 16, 24, 32, 28, 36 ]


// Better Way =======>
// -------------------

const arr2 = [2, 4, 6, 8, 7, 9];

let area = function (a) {
    return a * a;
}

let perimeter = function (a) {
    return 4 * a;
}

let calculate = function (arr, logic) {
    let res = [];
    for(let i = 0; i < arr2.length; i++){
        res.push(logic(arr2[i]));
    }

    return res;
}

console.log(calculate(arr2, area));    // ====> [ 4, 16, 36, 64, 49, 81 ]
console.log(calculate(arr2, perimeter));   // ====>  [ 8, 16, 24, 32, 28, 36 ]


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//   Map  ======>
//---------------

let arr3 = [2, 3, 4, 5, 6, 8, 7, 9];

let res = arr3.map( (a) => {
    return a * a;
});

console.log(res);   // ====> [ 4, 9, 16, 25, 36, 64, 49, 81 ]


//   Filter  ======>
//------------------

// Return only Even No.

let evenNo = arr3.filter( (a) => {
    return (a % 2 == 0);
});

console.log(evenNo);   // ======> [ 2, 4, 6, 8 ]


//   Reduce  ======> ( Return the sum of the array)
//-------------------------------------------------

let sumofArr = arr3.reduce( (acc, num) => {
    return acc + num;
});

