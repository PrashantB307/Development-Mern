let gallery = document.querySelector(".gallery");
gallery.addEventListener("click", () => {
    location.assign("./gallery.html");
});

var uid = new ShortUniqueId();
let video = document.querySelector("video");
let captureBtnCont = document.querySelector(".capture-btn-cont");
let captureBtn = document.querySelector(".capture-btn"); 
let transparentColor = "transparent";
let recordBtnCont = document.querySelector(".record-btn-cont");
let recordBtn = document.querySelector(".record-btn");

let recorder;
let chunks = [];
let constraints = {
    video : true,
    Audio : true
};

let shouldRecord = false; 

navigator.mediaDevices.getUserMedia(constraints)
.then((stream) => {
    video.srcObject = stream;

    recorder = new MediaRecorder(stream);
    recorder.addEventListener("start" , (e) => {
        // Memory
        chunks = [];
        console.log("rec start");
    });

    