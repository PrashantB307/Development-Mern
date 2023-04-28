const cheerio = require("cheerio");
let html = `<ul id="fruits">
  <li class="apple">Apple</li>
  <li class="orange">Orange</li>
  <li class="pear">Pear</li>
</ul>`;
//cheerio stores data in form of objects
let selecTool = cheerio.load(html);

let fruitNameArr = selecTool("#fruits");
console.log(fruitNameArr.text());

let fruitName = selecTool(".apple");
console.log(fruitName.text());