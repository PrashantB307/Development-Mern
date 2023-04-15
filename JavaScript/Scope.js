function outer() {
    inner() ;
    function inner () {
        console.log(b); 
    }
}
var b = 10;
outer();           //----> 10 
console.log(b);    //----> 10