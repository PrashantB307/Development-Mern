
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


