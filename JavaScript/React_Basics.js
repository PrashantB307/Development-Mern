

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


// ======================>  Important Point  <========================
//-----------------------------  React   -----------------------------


//  In render() method we can not use if-else, so we use ternary operator.
//  In React for writing JS code use => { } this bracket
//  and for CSS styling use => {{ }} this bracket