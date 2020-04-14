var express = require('express');
var router = express.Router();

//const Datos = require('../model/item')

let arreglo = [];

/* GET users listing. */
router.post('/', function(req, res, next) {

  const {item } = req.body
 // const Datos = new Datos ({
 // item: item
//})

  arreglo.push({ item: item})
  res.json(arreglo);

});

router.get('/', function(req, res, next) {

  const {item } = req.body
 
  res.json(arreglo);

});

router.post('/compute', function(req, res, next) {

  const {word1 , word2 } = req.body

  
arreglo.push(Datos)

});


module.exports = router;
