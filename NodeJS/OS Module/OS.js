//---->  OS Module  <------
//=========================

//This module provide function that you camn use retrive
//information from the underlying OS and interact with it.


const os = require('os');
// return the underlying architecure
let mySystemArch = os.arch();
console.log(mySystemArch);  //--> x64


// return inforation on the cpus
let myCpuInfo = os.cpus();
console.log(myCpuInfo);
//----> model: '11th Gen Intel(R) Core(TM) i5-1135G7 @ 2.40GHz',


// return the host name of the operating systm as string
let hostname = os.hostname();
console.log(hostname); //----> BHARDWAJ


// return the object containing network interfaces that have been assigned a network address
let networkInfo = os.networkInterfaces();
console.log(networkInfo);


// return the operating system as a string
console.log(os.release());  //---> 10.0.22621


// return the total amount of system memory in bytes as a integer
console.log(os.totalmem());  //--- >  8311836672


// returns the system uptime in number of seconds
console.log(os.uptime());  //----> 2280023


// Returns a string identifying the operating system platform for which the Node.js binary was compiled
console.log(os.platform());  //---> win32


// Returns information about the currently effective user
console.log(os.userInfo());
//----> username: 'PRASHANT BHARDWAJ',
//----> homedir: 'C:\\Users\\PRASHANT BHARDWAJ',



// eturns the operating system name as returned by uname(3)
console.log(os.type());  //----> Windows_NT