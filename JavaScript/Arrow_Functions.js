

//==========================> Arrow functions <============================
//-------------------------------------------------------------------------


//   There’s another very simple and concise syntax for creating functions, 
//   that’s often better than Function Expressions.

//   It’s called “arrow functions”, because it looks like this:

let sum = (a, b) => a + b;
console.log( sum(1, 2) );    //=====>  3


// *************************************************************************


//  If we have only one argument, then parentheses around parameters can be
//  omitted, making that even shorter.

// For example: ---> 

let double = n => n * 2;
console.log( double(8) );    //=====>  16


