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

        app.get('/', (req, res) => {
            const sql = "select EmployeeID,EmployeeName,Email,Birthday from test.employees"
            con.query(sql, function (err, result, fields) {  
            if (err) throw err;
            res.send(result)
            console.log('connect2');
            });
        });
        
        app.get('/:name?' ,(req, res) => {
            var id = req.params.name;
            con.query ("SELECT EmployeeID,EmployeeName,Email,Birthday FROM test.employees WHERE EmployeeID = ?",  [id],
            function (err, result, fields) {  
            if (err) throw err;
            res.send(result)
            });
        });
});


app.listen(1337);
console.log('server liseten ...');