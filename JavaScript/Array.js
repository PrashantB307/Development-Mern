
// Array is Collection of elements //

let cars = ["BMW" , "AUDI" , "MG" , "TATA"];
console.log(cars);

//2D Array//

let arr2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];
console.table(arr2d); // for printing in table//

console.log(arr2d[1][2]);
arr2d[1][2]=10;
arr2d[2][2]="pawan";
console.table(arr2d);

console.log(arr2d.length);


// =======================>    Loops    <=========================
// ---------------------------------------------------------------

let arr = ["Apple", "Orange", "Pear"];

for (let i = 0; i < arr.length; i++) {
  console.log( arr[i] );
}

// =====> Apple Orange Pear


//===========>  for - of  Loop  
//----------------------------

let fruits = ["Apple", "Orange", "Plum"];

// iterates over array elements
for (let fruit of fruits) {
  console.log( fruit );
}

// =====> Apple Orange Pear


//===========>  for - in  Loop  
//----------------------------

let arr1 = ["Apple", "Orange", "Pear"];

for (let key in arr1) {
  console.log( arr1[key] ); 
}

// =====> Apple Orange Pear


//=====================>    Methods   <=======================
//------------------------------------------------------------

//===========>  Push 
//--------------------

// Append the element to the end of the array:

let fruits1 = ["Apple", "Orange"];

fruits1.push("Pear");

console.log( fruits1 ); // =====> [ 'Apple', 'Orange', 'Pear' ]


//===========>  Pop 
//------------------

// Extracts the last element of the array and returns it:

let fruits2 = ["Apple", "Orange", "Pear"];

console.log( fruits2.pop() ); // remove "Pear" and alert it

console.log( fruits2 );  // ====> [ 'Apple', 'Orange' ]

