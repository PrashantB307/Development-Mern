
//======================> This <==========================
//--------------------------------------------------------

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