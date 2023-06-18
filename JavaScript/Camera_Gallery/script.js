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

    recorder.addEventListener("dataavailable" , (e) => {
        chunks.push(e.data);
        console.log("rec push in chunked");
    });;

    recorder.addEventListener("stop" , () => {
        // convert video
        let blob = new Blob(chunks, { type: 'video/mp4' });
        console.log("rec stoped");
        // Download video on desktop
        let videoURL = URL.createObjectURL(blob);
        console.log(videoURL);

        // let a = document.createElement('a');
        // a.href = videoURL;
        // a.download = "myVideo.mp4";
        // a.click();
        // Store in database
        if(db) {
            let videoId = uid();
            let dbTransaction = db.transaction("video", "readwrite");
            let videoStore = dbTransaction.objectStore("video");
            let videoEntry = {
                id: `vid-${videoId}`,
                blobData: blob,
            };
            let addRequest = videoStore.add(videoEntry);
            addRequest.onsuccess = () => {
                console.log("video added to db ");
            };
        }
    });
});

// Click Photo
captureBtnCont.addEventListener("click", () => {
    captureBtn.classList.add("scale-capture");
    let canvas = document.createElement("canvas");

    let tool = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    tool.drawImage(video, 0, 0, canvas.width, canvas.height);

    // Applying filters on photos
    tool.fillStyle = transparentColor;
    tool.fillRect(0, 0, canvas.width, canvas.height);

    let imageURL = canvas.toDataURL();
    // let img = document.createElement("img");
    // img.src = imageURL;
    // document.body.append(img);
    if(db) {
        let ImageId = uid();
        let dbTransaction = db.transaction("image", "readwrite");
        let imageStore = dbTransaction.objectStore("image");
        let imageEntry = {
            id: `img-${ImageId}`,
            url: imageURL
        };
        let addRequest = imageStore.add(imageEntry);
        addRequest.onsuccess = () => {
            console.log("Image added to db ");
        }
    }

    setTimeout( () => {
        captureBtn.classList.remove("scale-capture");
    }, 510);
});

