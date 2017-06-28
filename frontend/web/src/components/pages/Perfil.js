import React, { Component } from "react";
import { inject, observer } from "mobx-react";

import Protected from "../Protected";

@inject("store")
@observer
@Protected
export default class Perfil extends Component {

    render() {
        return (
            <div className="container">
            <h1 className="center-align"> Perfil de {this.props.store.sesion.datosUsuario.nombre} </h1>
            </div>
        );
    }
}