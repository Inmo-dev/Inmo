//Inicia el logger general
_winston = require("winston")
_winston.level = "debug"
global.log = _winston

//Secreto de JWT, debe ser una cadena larga extremadamente aleatoriaa
global.JWT_SECRETO = "cambiame"
//Puerto de la aplicacion
global.puerto = "3000"