const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors');

/*
* IMPORTAR RUTAS
*/
const usersRoutes = require('./routes/userRoutes');

const port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cors());

app.disable('x-powerd-by');

app.set('port', port);

/*
* LLAMADO RUTAS
*/

usersRoutes(app);

//Usar IPv4 en el server.listen para realizar las pruebas

server.listen(3000, '192.168.100.17' || 'localhost', function(){
    console.log('Aplicacion de NodeJS ' + port + ' iniciada...');
});

app.get('/', (req, res) => {
    res.send('Ruta raiz del backend');
});

app.get('/test', (req, res) => {
    res.send('Este es la ruta TEST');
});


//ERROR HANDLRER
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
});