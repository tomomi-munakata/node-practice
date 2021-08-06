// console.log("hello world");

// // ノンブロッキング
// setTimeout(() => {
//     console.log("Hello");
// }, 1000);
// console.log("World");

// // ブロッキング
// const start = new Date().getTime();
// while (new Date().getTime() < start + 1000);
// console.log("World");

const http = require('http');
const { deflate } = require('zlib');
const app = http.createServer();
let msg;

app.on('request', (req, res) => {
    switch (req.url) {
        case '/api/v1':
            msg = "api1";
            break;
        case '/api/v2':
            msg = "api2";
            break;
        default:
            msg = '404 not found';
            break;
    }
    
    res.writeHead(200, {'Content-Type':'text/plain'});
    // res.write('Hello World!');
     res.write(msg);
    res.end();
});

app.listen(1337,'localhost')
console.log('server listening ...');