

                            //  OBJECTS..-------->

// let obj = {};
// console.log(obj);  // {}   Empty objects

// let person = {
//     name: "Pawan",
//     age: 22,
//     phone: 865687,
//     gender: "Male"
// };
// console.log(person);
// //{ name: 'Pawan', age: 22, phone: 865687, gender: 'Male' }

// console.log(person.name); //Pawan
// console.log(person.phone);  //865687


                      //Nesting of OBJECTS ---------->

let captainAmerica = {
    fname: "Steve",
    lname: "Rogers",
    friends: ["Bucky", "Tony Stark", "Bruce Banner", "Natasha", "Clint"],
    age: 114,
    address: {
        state: "Manhattan",
        city: "New York",
        country : "USA"
    },
    sayHi: function(){
        console.log(`Hello my name is ${this.fname}`);
    }
};
//console.log(captainAmerica);
//   fname: 'Steve',
//   lname: 'Rogers',
//   friends: [ 'Bucky', 'Tony Stark', 'Bruce Banner', 'Natasha', 'Clint' ],
//   age: 114,
//   address: { state: 'Manhattan', city: 'New York', country: 'USA' },
//   sayHi: [Function: sayHi]

// console.log(captainAmerica.friends);  //[ 'Bucky', 'Tony Stark', 'Bruce Banner', 'Natasha', 'Clint' ]
// console.log(captainAmerica.address);  //{ state: 'Manhattan', city: 'New York', country: 'USA' }
// captainAmerica.sayHi();  //Hello my name is Steve

          

                   //For Loop ----------->
              
// for(let key in captainAmerica){
//     console.log(key);      // for keys
//     console.log(captainAmerica[key]);   //for keys values
// }    

//    Output------>
// //[ 'Bucky', 'Tony Stark', 'Bruce Banner', 'Natasha', 'Clint' ]
// age
// 114
// address
// { state: 'Manhattan', city: 'New York', country: 'USA' }
// sayHi
// [Function: sayHi]




let car = {
    name: "Ferrari",
    model: 2023,
    startEngine: function(){
        console.log(`Strting the engine of the car ${this.name}`);
    }
};
car.startEngine();   //Strting the engine of the car Ferrari
