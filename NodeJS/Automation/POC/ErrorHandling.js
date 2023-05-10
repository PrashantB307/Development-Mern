// <--------------------- try_ statement -------------------->
// ===========================================================

// The statement to be executed.


// <-------------------- catch_ statement ------------------->
// ===========================================================

// Statement that is executed if an exception is thrown in the 
// try block.



// <------------------- finally_ statement ------------------->
// ============================================================

// Statement that are executed after the try statement completed.
// These statement executed regardless of whether an exception was
// thrown or caught.



try {
    console.log("In try");
} catch (e) {
    console.log(e);
} finally {
    console.log("I am always executed");
    console.log("Hurray");
}

// ====> In try
//       I am always executed
//       Hurray



