

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


//=====================>  Rest Operator <=====================
//XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// It is used to Merge a list of functions arguments into an array.


function fun (...args) {
    console.log(args);   // =====>  [ 'Hello', 'How', 2, true ]
    console.log(typeof args);   // =====> object
    args.forEach(arg => {
        console.log(arg);   // =====>  Hello How 2 true
    });
};

fun("Hello", "How", 2, true);