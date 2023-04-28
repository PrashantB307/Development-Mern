let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";

const request = require("request");
const cheerio = require("cheerio");

request(url, cb);

function cb(err, res, body){
    if(err){
        console.log("error", err);
    }else{
        handleHtml(body);
    }
}
    
function handleHtml(html){
    let selecTool = cheerio.load(html);
    let anchorElem = selecTool('a[data-hover="View All Results"]');
    console.log(anchorElem.html());
}


