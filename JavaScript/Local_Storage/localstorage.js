localStorage.setItem("fname", "Prashant");
localStorage.setItem("middle", "kumar");
localStorage.setItem("lname", "Bhardwaj");
localStorage.setItem("stream", "CSE");
localStorage.setItem("Age", "21");

let data = localStorage.getItem("lname");
console.log(data);  //---> Bhardwaj

let l = localStorage.length;
console.log(l);  //---> 5

let d = localStorage.key(3);
console.log(d);  //---> stream

localStorage.removeItem("age");