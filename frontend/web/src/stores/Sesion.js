import { observable, action } from "mobx";
import axios from "axios";

export default class Sesion {
    @observable sesionIniciada;
    @observable jwtToken;
    @observable datosUsuario;

    constructor(){
        this.sesionIniciada = false;
        this.jwtToken = null;
        this.datosUsuario = {nombre: ""};
    }

    @action iniciarSesion(usuario, contraseña){
        // TODO: Implementar inicio de sesion
        this.sesionIniciada = true;
        this.jwtToken = "JWTTOKEN-ASDASD1234";
        this.datosUsuario.nombre = usuario;
    }
}