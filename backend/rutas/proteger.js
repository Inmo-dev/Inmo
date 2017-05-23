var ruta = require("express").Router()
//Json Web Token (JWT), es un token de autenticacion que se encarga de mantener la sesion de 
//un usuario sin intervencion del servidor, asi el usuario decide cuando cerrar sesion.
var jwt = require('jsonwebtoken');

ruta.use(function(req, res, next) {

    //El token se envía en el cuerpo de la request o en la url o en un header
    var token = req.body.token || req.query.token || req.headers['x-access-token'];

    if (token) {
        jwt.verify(token, global.JWT_SECRETO,
            function(err, decoded) {

                //Si ocurrio un error autenticando el token
                if (err) {
                    res.status(401)
                    return res.json({
                        success: false,
                        message: 'Token invalido.'
                    });
                } else {
                    //Se manda el objeto a la/s siguiente/s ruta/s
                    req.usuario = decoded;
                    //Se ejecuta la/s siguiente/s ruta/s
                    next();
                }
            }
        );

    } else {
        //No se encontró token en la peticion, por lo tanto no puede seguir adelante
        return res.status(400).send({
            success: false,
            message: 'Sin token.'
        });

    }
});

module.exports = ruta