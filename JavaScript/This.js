
//============================> This <==============================
//------------------------------------------------------------------

let user = {
    name : "Pawan",
    sayHi() {
        console.log(user.name);
    }
}

let admin = user;
 
user.sayHi();   //====> Pawan
admin.sayHi();  //====> Pawan

user = null;
admin.sayHi();  //====> error


//*******************************************************************


let user1 = {
    name : "Pawan",
    sayHi() {
        console.log(this.name);
    }
}

let admin1 = user1;
 
user1.sayHi();   //====> Pawan
user1 = null;
admin1.sayHi();  //====> Pawan