

//  Default imports ========>
//---------------------------

import obj from "./Temp";
console.log(obj);


//  Named imports ==========>
//---------------------------

import { exportedObj } from "./String";

        // All --->

import * as bundled from "./String";
bundled.key;
bundled.exportedObj;

// =====> bundled = {
//           key : "PRA- 988983",
//           exportedObj : {
//               name : "Pawan",
//               age : 22
//           }
//        };