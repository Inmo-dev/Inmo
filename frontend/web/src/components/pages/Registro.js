import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Redirect } from 'react-router';

@inject("store")
@observer
export default class Registro extends Component {
    render() {
        return (
            <div className="col s6">

                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">account_circle</i>
                        <input id="usuario" type="text" className="validate" />
                        <label htmlFor="usuario">Usuario</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">vpn_key</i>
                        <input id="contraseña" type="password" className="validate" />
                        <label htmlFor="contraseña">Contraseña</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">vpn_key</i>
                        <input id="contraseñaR" type="password" className="validate" />
                        <label htmlFor="contraseñaR">Repetir contraseña</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s6">
                        <i className="material-icons prefix">mail_outline</i>
                        <input id="email" type="email" className="validate" />
                        <label htmlFor="email">Correo electronico</label>
                    </div>
                </div>

                <div className="row">
                    <button className="btn waves-effect waves-light" >
                        Enviar
                <i className="material-icons right">send</i>
                    </button>
                </div>

            </div>
        );
    }
}