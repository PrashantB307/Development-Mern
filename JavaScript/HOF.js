
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


