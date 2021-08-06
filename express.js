const express = require('express');
const app = express();
const Hello = require('./Helloworld');
const mysql = require('./mysql');

//URL分岐
app.get('/', (req, res) => {
  Hello.Hello(req, res);
});
app.get('/api',(req,res) => {
  res.send('Hello Api!');
});


//プレースホルダー
app.get('/user/:name?' ,(req, res) => {
    if (req.params.name) {
        res.send("Hello " + req.params.name);
    } else {
        res.send("Hello nobody!");
    }
    //res.send(req.params.name);
});

//ファイルの読み込み
app.use(express.static(__dirname + '/text'));
app.get('/hello.text', (req, res) => {
    res.sendfile(__dirname + '/text/hello.text');
});

mysql.mysqlConnect();

app.listen(4000);
console.log('server liseten ...');