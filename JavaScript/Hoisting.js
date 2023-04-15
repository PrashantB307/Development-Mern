 
                   //-------> Hoisting <--------
                   //============================
// $$ We can access the variables and functins even before we declare them $$

var x =10;
function greet(){
    console.log("Hello User");
}

console.log(x);
greet();

//  10
//  Hello User

//==================================================

console.log(y);
greety();
var y = 10;
function greety() {
    console.log("Hello User");
}

//  undefined
//  Hello User

//=====================================================

console.log(a);   //---> undifiend
hey();            //---> Hello Guys
// hello();          //---> error  (hello is not a function)
var a =10;
function hey() {
    console.log("Hello Guys");
}
var hello = function() {
    console.log("You are Ossam");
}
hello();           //----> You are Ossam