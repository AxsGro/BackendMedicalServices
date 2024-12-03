const mysql = require('mysql2');
//Modificar datos de base de datos para pruebas en distintos equipos
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Angel-Zorro02',
    database: 'medical_services'
});

db.connect(function(err){
    if(err) throw err;
    console.log('DATABASE CONECTED!');
})

module.exports = db;