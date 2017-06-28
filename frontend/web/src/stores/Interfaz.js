import { observable, action } from "mobx";
import axios from "axios";

export default class Interfaz {
    @observable cargandoPagina;

    constructor(){
        this.cargandoPagina = false;
    }

    @action cargar() {
        this.cargandoPagina = true;
    }

    @action cargado() {
        this.cargandoPagina = false;
    }
}