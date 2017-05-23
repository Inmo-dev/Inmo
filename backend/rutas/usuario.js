//El Router es el objeto que se encarga de ver si la peticion corresponde al patron que se esp
//ecifica, al final todos los routers se combinan en uno solo. Todos los archivos de esta carp
//eta (/rutas) son exclusivamente para las rutas.
var ruta = require("express").Router()
//Aqui debe ir la logica de todas las posibles acciones del usuario
var usuario = require("../acciones/usuario.js")


//Todos los usuarios
ruta.get('/usuarios', function(req, res) {
	//Es posible que la accion necesite la peticion y la respuesta, en este caso se puede enca
	//psular en un solo objeto
    usuario.todos({req, res}) 
})

//Usuario por cedula
ruta.get('/usuario/cedula/:cedula', function(req, res) {
	//Es posible que la accion no esté implementada, en este caso se puede retornar un mensaje
    res.send('Busqueda de usuario por cedula. Por implementar')
})

//Nuevo usuario
ruta.post('/usuario', function(req, res) {
	//En este caso, esta funcion puede estructurarse para solo recibir req, ya que req.body fo
	//rma parte de el y es redundante. No tengan miedo de refactorizar *si no genera un error*
    usuario.nuevo(req, req.body)
})

//Debe exportarse unicamente un router por archivo
module.exports = ruta