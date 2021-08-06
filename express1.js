const express = require('express');
const app = express();
const Hello = require('./Helloworld');
const mysql = require('mysql')

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
    });

    con.connect((err) => {
    if (err) throw err;
    console.log('Connected!');

        app.get('/sql', (req, res) => {
            const sql = "select EmployeeID,EmployeeName,Email,Birthday from test.employees"
            con.query(sql, function (err, result, fields) {  
            if (err) throw err;
            res.send(result)
            console.log('connect2');
            });
        });
        
        app.get('/sql/:name?' ,(req, res) => {
            var id = req.params.name;
            con.query ("SELECT EmployeeID,EmployeeName,Email,Birthday FROM test.employees WHERE EmployeeID = ?",  [id],
            function (err, result, fields) {  
            if (err) throw err;
            res.send(result)
            });
        });
});

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
});

app.get('/sql/:Employeeid') ,(req,res) => {
    res.send()
}


//ファイルの読み込み
app.use(express.static(__dirname + '/text'));
app.get('/hello.text', (req, res) => {
    res.sendfile(__dirname + '/text/hello.text');
});

 app.listen(4000);
 console.log('server liseten ...');
