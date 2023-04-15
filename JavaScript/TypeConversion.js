           
           
            //------> Automatic Type Conversion <--------
            //===========================================

var ans = "5" + 1;
console.log(ans);  // 51

var ans = 1 + "5";
console.log(ans);  // 15

console.log(null * 5);  // 0    ---->  null is also converted into zero(0).
console.log(null * "5");  // 0
console.log(undefined * 5);  // NaN

console.log("5" - 1);  // 4
console.log("ten" * 3);  // Nan

console.log("5" * 3);  // 15

console.log("5" * "5");  // 25