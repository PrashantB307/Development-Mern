                      // Entry point of my Line
        //==================================================

let helpFunc = require("./commands/help");
console.log(helpFunc.help());

let inputArr = process.argv.slice(2);
let command = inputArr[0];
switch(command){
    case "tree":
        //call tree functions
        console.log("tree function called and executed succesfully" + path)
        break;

    case "organise":
        //call organise function
        console.log("organise function called and executed succesfully")
        break;

    case "help":
        //call help function
        helpFunc.help();
        console.log("help  function called and executed succesfully")
        break;   

    default:
        //console.log("command not recognised :/");
        break;    
} 