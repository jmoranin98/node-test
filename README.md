# Test practico NodeJS

- [ ] Crear un servidor web con Nodejs y Express escuchando en el puerto 3001
- [ ] Crear ruta POST /item que recibirá un JSON de la forma {"item": "foo"} y lo guardará en un array
```
curl -X POST -H "Content-Type: application/json" -d '{ "item": "foo" }' localhost:3001/item
Response: 200
```
- [ ] Crear ruta GET /item que mostrará todos los items guardados en el array
```
curl -X GET localhost:3001/item
Response: { "items": ["foo", "bar"] }
```
- [ ] Crear ruta POST /compute que recibirá de body un JSON de la forma {"word1": "foo", "word2": "bar"} y responderá la cadena más larga común entre ambas palabras
```
curl -X POST -H "Content-Type: application/json" -d '{ "word1": "acera", "word2": "balace" }' localhost:3001/compute
Response: { "result": "ace" }
```
