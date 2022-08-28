const mysql = require('mysql');

var conection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'examen',
    port: '3306'
});

conection.connect(function (error) {
    if(error) {
        throw error;
    }
    console.log('Connected...');
})

module.exports = {conection};