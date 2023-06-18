// Connect to DataBase
let db;
let openRequest = indexedDB.open('myDataBase');

openRequest.addEventListener("success", () => {
    console.log("db Connected");
    db = openRequest.result;
});

openRequest.addEventListener("upgradeneeded", () => {
    console.log("db upgrade OR initalised db");
    db = openRequest.result;

    db.createObjectStore("video", { keyPath: "id" });
    db.createObjectStore("image", { keyPath: "id" });

});

openRequest.addEventListener("error", () => {
    console.log("db error");
});