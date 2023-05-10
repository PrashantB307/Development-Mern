
//-------------------> Promise <--------------------
//==================================================

function f() {
    return new Promise(function (resolve, reject) {
        resolve ("Hi");
    });
}

console.log(f());  //===> Promise { 'Hi' }



//-------------------> async <-----------------------
//====================================================

//===> The word “async” means one a function always returns
//      a promise.

async function f() {
    return "Hello"
}
console.log(f());   //===> Promise { 'Hello' }



//-------------------> await <------------------------
//====================================================

//===> The keyword await makes JS wait until the promise settles
//     and return its results.
//     ( Wait until the Promise resolve )

async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout (() => resolve("done"), 5000)
    });

    let result = await promise;
    console.log("Hello");
    console.log(result);
}
f();
console.log("YOLO");

//================> YOLO
//(after 5 sec) ==> Hello Done




async function showAvatar() {

    // read our JSON
    let response = await fetch('/article/promise-chaining/user.json');
    let user = await response.json();
  
    // read github user
    let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
    let githubUser = await githubResponse.json();
  
    // show the avatar
    let img = document.createElement('img');
    img.src = githubUser.avatar_url;
    img.className = "promise-avatar-example";
    document.body.append(img);
  
    // wait 3 seconds
    await new Promise((resolve, reject) => setTimeout(resolve, 3000));
  
    img.remove();
  
    return githubUser;
  }
  
  showAvatar();