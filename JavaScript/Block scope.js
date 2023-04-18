

//Block ---> It is used to compound statements

//Block Scope ---> variables declared in a block are accesible inside that block
//     those variables are known to be blocked scoped
//( variables declared using let and const are block scoped )



var a = 100;
 {
    var a = 10;  
    let b = 20;
    const c = 30;

    console.log(a);  //--> 10
    console.log(b);  //--> 20
    console.log(c);  //--> 30
 }

 console.log(a);  //--> 10  (a is Global) 
 console.log(b);  //---->  error b is not defined
 console.log(c);  //---->  error c is not defined




let  b = 10;  
{
    var a = 10;
    let b = 20;
    const c = 30;

    console.log(a);  //--> 10
    console.log(b);  //--> 20
    console.log(c);  //--> 30
}
console.log(b);   //--> 10