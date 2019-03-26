var fs = require('fs');

fs.readFile(__dirname + '/1.txt',function (err,data) {

    if(err){throw err}

    console.log(data.toString());
});

// 其实模块就是 js 与js 之间的关系