

//====================>  Spread Operator <====================
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// It is used to split up Array elements or Object properties. 

const nums = [1, 2, 3];
const newNums = [...nums, 4];
console.log(newNums);   // =====> [ 1, 2, 3, 4 ]

const newNums2 = [nums, 4];
console.log(newNums2);   // =====> [ [ 1, 2, 3 ], 4 ]


const oObj = {
    name: "pawan",
    age: 22
}

const nObj = {...oObj, age: 32};
console.log(nObj);    // =====> { name: 'pawan', age: 32 }


