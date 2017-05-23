var ruta = require("express").Router()

ruta.get('/te', function(req, res) {
    //Estado HTTP 418 (I'm a teapot)
    res.status(418)
    //El objeto res, de response, puede responder a la peticion con un objeto JSON.
    res.json(
    	{
    		cafe: {
    			temperatura : "caliente",
    			color : "negro",
    			sabor : "amargo"
    		}
    	}
    );
})

module.exports = ruta