// Inicia valores constantes necesarios para la aplicacion
require("./startup.js")
// Inicia la/s conexion/es a la/s BD
require("./database/conectar.js")

// Un middleware es un plugin. Todos se van conectando y procesan cada peticion que se le hace
// al servidor, luego que la procesan, dan esta peticion al middleware siguiente. El ultimo mi
// ddle ware da la peticion a las rutas.
// * Middleware * //
var compresion 	= require('compression')    //Comprime las respuestas del servidor
var morgan     	= require('morgan')			//Genera logs de las peticiones
var express 	= require('express')		//Framework web
var helmet 		= require('helmet')			//Configura la seguridad de la aplicacion
var bodyParser 	= require('body-parser')	//Permite acceder a los datos que se envian al API
var cors 		= require('cors')			//Permite que otro dominio acceda a los endpoints
// * Middleware * //

//Aplicacion express
var app 		= express()					//Aplicacion

// Se aplican y configuran los middleware
// * Configuracion de middleware * //
app.use(helmet())
app.use(cors())
app.use(bodyParser.json({type: "*/*"}))
app.use(morgan('dev'))
app.use(compresion())
// * Configuracion de middleware * //

//Las rutas son los diferentes modulos que tiene un api, para separarlos en archivos independi
//entes y hacer totalmente modular la aplicacion.
// * Rutas * //
var apiUsuarios = require("./rutas/usuario.js")		//Todo lo relacionado a un usuario
var apiAuth 	= require("./rutas/autenticar.js")	//Todo lo relacionado a la autenticacion
var apiProteger = require("./rutas/proteger.js")	//Limita acciones a usuarios autenticados
var apiTeapot 	= require("./rutas/teapot.js")		//HTTP status 418
// * Rutas * //

//Procesamiento de las peticiones, en esta parte es muy importante el orden en el que se agreg
//an las rutas, ya que en ese mismo orden se van procesando las peticiones. En el momento en
//que una peticion coincide con una ruta, esta la procesa y la responde, sin llegar a las pet
//iciones siguientes.
// * Procesamiento de rutas * //

//Raiz, sin ninguna accion. api.inmo.co.ve/
// Entrada esperada: -
// Salida: -
app.get('/', 
	function(req, res) {
		res.send("API de inmo, para mas información: <a href=\"https://github.com/Inmo-dev/Inmo.git\">Click aquí.</a>");
	}
);

//Prueba, debe retornar el HTTP status 418 (I'm a teapot), ver /rutas/teapot.js
// Entrada esperada: -
// Salida: -
app.use('/api', apiTeapot)

//Autenticacion, ver /rutas/autenticar.js
// Entrada esperada: {usuario, contraseña}
// Salida: JWT ó {error:mensaje}
app.use('/api', apiAuth)

//Impide el paso de peticiones a usuarios no autenticados, ver /rutas/autenticar.js
// Entrada esperada: {..., token}
// Salida: pase a la siguiente ruta ó {error, mensaje}
app.use(apiProteger)

//Funciones sobre usuarios, ver /rutas/usuario.js
app.use('/api', apiUsuarios)

//Si ninguna ruta coincide
// Entrada esperada: -
// Salida: {error:mensaje}
app.use(function (req, res, next) {
  res.status(404)
  res.json({error:"Acción no reconocida."})
})
// * Procesamiento de rutas * //

//Se inicia el servidor
app.listen(global.puerto || 3000, function () {
  global.log.info('Aplicacion corriendo en puerto '+(global.puerto || 3000))
  global.log.info('Jwt secreto = '+global.JWT_SECRETO)
})
