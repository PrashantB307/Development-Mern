

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
    //1. To chek if src is present
    if(srcpath == undefined){
       // console.log(srcpath);
        srcpath = process.cwd();
       // console.log("source files is" ,srcpath);
    }

    //2. To creat a directory --> organized_files
    let organizedfiles = path.join(srcpath, "organized_files");
    console.log("organised files folder path is", organizedfiles);
    if(fs.existsSync(organizedfiles) == false){
        fs.mkdirSync(organizedfiles); 
    }else{
        console.log("folder is already exists");
    }

    let allFiles = fs.readdirSync(srcpath);
    console.log(allFiles)
    
}

let srcpath = "D:\Development Mern\Node JS\File Organizer\downloads"
organize(srcpath); 