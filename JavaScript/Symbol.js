

//=============================>   Symbols   <==============================
//--------------------------------------------------------------------------

// A "Symbol" is a Primitive unique vale.
// A "Symbol" represents a uniqe identifier .
// A value of this type can be created using "Symbol()" .

let id = Symbol();

// Symbols are guranteed to be unique.

let id1 = Symbol("id");
let id2 = Symbol("id2");

console.log(id1 == id2);   // ====> false