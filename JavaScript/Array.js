
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


