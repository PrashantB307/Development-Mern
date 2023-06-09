

//========================> Optional Chaning " ?. " <=========================
//----------------------------------------------------------------------------

let user = {};   // a user without "address" property
console.log(user.address.street);
// =====> Error
// because there are no property like address and street .



// The Optional Chaning " ?. " stops the evalution if the vcalue before " ?. "
// is undefined or null and return undefined.


let user1 = {};   // user1 has no address proprty
console.log( user1 ?. address ?. street);  
// =====> undefined (no error)

// " ?." check the user1 prperty if there are not address property then its gives 
// undefined insted of Error . 


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX


//===========================>    " ?.( ) "     <=============================
//----------------------------------------------------------------------------

//  " ?.( ) "  ==> is used to call a function that may not exits.

let userAdmin = {
    admin () {
        console.log(" I am admin ");
    }
};

let userGuest = {};

userAdmin.admin ?. ();   // ====>  I am admin 

userGuest.admin ?. ();   //====> nothig happen (no such method)