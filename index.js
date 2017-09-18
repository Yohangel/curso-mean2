'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.port || 3977;

const uri = 'mongodb://localhost:27017/curso_mean2';
const options = {
    useMongoClient: true
}

mongoose.connect(uri,options, (err, res) => {
    if(err){
        throw err;
    }else{
        console.log("La conexion a la base de datos esta funcionando correctamente");
        app.listen(port, function(){
            console.log('Servidor del api rest de musica escuchando en http://localhost:'+port);
        });
    }
});