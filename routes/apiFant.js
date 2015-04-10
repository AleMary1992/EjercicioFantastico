var express = require('express');
var router = express.Router();

function api_router(db){
  /* TODO: Ruta para obtener el tocken de autorizacion */

  // Ruta para extraer las aulas con clases en la hora y fecha del sistema
    router.post('/Dato', function(req, res, next){
    var coleccion = db.collection("fantastico");
    var date = new Date().toDateString();

    var query = {
        usuario: req.body.user,
        fecha: date
    };

    //console.log(query);
    coleccion.update(query,{"$inc":{"contador":1}},{"upsert":true},function(err ,md ,status){
      res.status(200).json({"documento":md});
    });

  });

    router.get('/getTopLista',function(req , res, next){
      console.log("llego a la api");
    var coleccion = db.collection("fantastico");
    coleccion.find().sort({"contador":-1}).toArray(function(err , docs){
  //  coleccion.find().toArray(function(err , md ,status){
  if(err) throw err;
    res.status(200).json(docs);
    })
  });

  return router;
}
module.exports = api_router;
