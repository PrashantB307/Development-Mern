

const fs = require("fs");  //fs module
const path = require("path");  //path module

let types = {
    media: ['mp4', 'mkv', 'mp3'],
    archives: ['zip', '7z', 'rar', 'tar', 'iso'],
    documents: ['docx', 'doc', 'pdf', 'odf', 'txt', 'tex', 'ps'],
    app: ['exe', 'dmg', 'pkg', 'deb'],
    images: ['png', 'jpg', 'jpeg']
}

function organize(srcpath){
    if(srcpath == undefined){
        // The process.cwd() method returns the 
        // current working directory of the Node.js process.
       // console.log(srcpath);
        srcpath = process.cwd();
        console.log("source files is" ,srcpath);
    }
    // else{
    //     console.log(srcpath);
    // }
    let organizedfiles = path.join(srcpath, "organised_files");
    console.log("organised files folder path is", organizedfiles);
    if(fs.existsSync(organizedfiles) == false){
        fs.mkdirSync(organizedfiles); 
    }else{
        console.log("folder is already exists");
    }
    
}

organize();