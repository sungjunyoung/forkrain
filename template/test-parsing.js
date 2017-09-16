const fs = require('fs');

const article = fs.readFileSync("test.txt");

lineArray = article.toString().split('\n');
