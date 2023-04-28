const request = require("request");

// Cheerio parses HTML and it traverses the html so that data
// ^ can be manipulat.
const cheerio = require("cheerio");
request("https://www.worldometers.info/coronavirus/", cb);

function cb(err, res, body){
    if(err){
        console.error("error", err);
    }else{
        handleHtml(body);
    }
}   

function handleHtml(html){

    let selecTool = cheerio.load(html);
    let coronaStats = selecTool(".maincounter-number");

    //console.log(coronaStats.text());

    let totalCases = selecTool(coronaStats[0]).text();
    console.log("Total Cases --> " + totalCases);

    let totalDeaths = selecTool(coronaStats[1]).text();
    console.log("Total Deaths --> " + totalDeaths);

    let totalRecovery = selecTool(coronaStats[2]).text();
    console.log("Total Recovery --> " + totalRecovery);
    

}
