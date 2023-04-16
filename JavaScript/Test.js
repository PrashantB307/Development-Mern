//-----------> Question 1 <------------
//======================================

let random = {name: "pawan"};
random = 23;

if(!typeof random === "string"){
    console.log("It is not a string");
}else{
    console.log("Yay it is a string");
}
//----> Yay it is a string


//-----------> Question 2 <------------
//======================================

const user = {
    email: "my@email.com",
    updateemail: function(email){
        this.email = email;
    }
}
user.updateemail("new@email.com");
console.log(user.email);
//-----> new@email.com


//-----------> Question 3 <------------
//======================================

const fruit = [ 'banana', 'orange', 'apple'];

fruit.slice(0, 1);
fruit.splice(0, 1);
fruit.unshift('grapes');

console.log(fruit);
//-----> [ 'grapes', 'orange', 'apple' ]


//-----------> Question 4 <------------
//======================================

let count = 0;
const nums = [0, 1, 2, 3];

for(var i in nums){
    if(i)
    count += 1;
}

console.log(count);
//------> 4


//-----------> Question 5 <------------
//======================================

const emojis = ['sad', 'happy','surprise', 'nervous'];

emojis.push('excited');
console.log(emojis);  //------>[ 'sad', 'happy', 'surprise', 'nervous', 'excited' ]

emojis.splice(0, 2);
console.log(emojis);  //----->[ 'surprise', 'nervous', 'excited' ]

console.log(emojis.length);  //------->3



//-----------> Question 6 <------------
//======================================

const add = function(x) {
    return x + x;
}

function myfunc(num = 2, value = add(num)) {
    console.log(num, value);
}

myfunc();   //-----> 2 , 4
myfunc(3);  //-----> 3 , 6
myfunc(4, 8);  //--> 4 , 8


//-----------> Question 7 <------------
//======================================

const fruits = ['apple', ['banana', 'grapes',['mango','guava']]];

console.log(fruits.flat(1));

//(Flate means :- Concatinate or add 1st level array with 0 level array)
//---> [ 'apple', 'banana', 'grapes', [ 'mango', 'guava' ] ]

console.log(fruits.flat(Infinity));
//---->[ 'apple', 'banana', 'grapes', 'mango', 'guava' ]
//(Infinity :- concatinate all levels in 0 level )


//-----------> Question 8 <------------
//======================================

var value = 21;

function getinfo() {
    console.log(typeof value);
    var value = 'Bhardwaj';
}

getinfo();  //-----> undefined



//-----------> Question 9 <------------
//======================================

const sum  = function(x){
    function inner (y) {
        function innermost (z) {
            console.log(x, y, z);
            return x + y + z;
        }
        innermost(6);
    }
    inner(5);
}

sum(4);  //------> 4 5 6



//-----------> Question 10 <------------
//======================================

const person = {
    fname: 'Pawan',
    lname: 'Bhardwaj',
    pet: {
        name: 'rocky',
        breed: 'bull dog'
    },
    getfulname() {
        return `${this.fname} ${this.lname}`;
    }
};

console.log(person.pet?.name);  //--->  rocky
console.log(person.pet?.family?.name);  //---> undefined
console.log(person.getfulname?.());  //---> Pawan Bhardwaj
//console.log(member.getlastname?.()); //---> error


//-----------> Question 11 <------------
//======================================

function sumval(x, y, z) {
    return x + y + z;
}
console.log(sumval([1,2,3]));
//---> 1,2,3undefinedundefined



//-----------> Question 12 <------------
//======================================

const food = ['pizza', 'chocolate', 'buger', 'chiken'];
const info = {favoritefood: food[0]};

info.favoritefood = 'egg-cury';

console.log(food);
//-----> [ 'pizza', 'chocolate', 'buger', 'chiken' ]



//-----------> Question 13 <------------
//======================================

const colorconfiq = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false,
};

const color = ['pink', 'red', 'blue'];

console.log(colorconfiq.red);  //----> true


//-----------> Question 14 <------------
//======================================

function num(a , b) {
    if(a > b){
        console.log(`${a} is bigger`);
    }else{
        console.log(`${b} is bigger`)
    }
    return
     a + b;
}

console.log(num(4 , 2));  //---> 4 is bigger  undefined
 
console.log(num(1 , 2));  //---> 2 is bigger  undefined



//-----------> Question 15 <------------
//======================================

let newlist = [1, 2, 3].push(4);

//console.log(newlist.push(5));  //---> error .(push(5)) is not a function