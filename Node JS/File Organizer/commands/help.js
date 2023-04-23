function help(){
    console.log(`
    These are some GIT commands used in various situations:
    1. node main.js tree <path>
    2. node main.js organize <path>
    3. node main.js help
    `);
}

// function abc() {
//     console.log("In help.js");
// }

module.exports = {
    help : help,
   //abc : abc
}