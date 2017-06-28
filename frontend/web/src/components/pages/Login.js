import React, {Component} from "react";
import {inject, observer} from "mobx-react";
import {Redirect} from 'react-router';

@inject("store")
@observer
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store.sesion;
        this.state = {
            usr: "",
            pw: ""
        };
    }

    logear() {
        console.log("usr:" + this.state.usr + " pw:" + this.state.pw);
        this
            .store
            .iniciarSesion(this.state.usr, this.state.pw);
    }

    cUsr(event) {
        this.setState({usr: event.target.value});
    }

    cPw(event) {
        this.setState({pw: event.target.value});
    }

    render() {
        const {sesionIniciada} = this.store;
        return (

            <div className="col s4">
                <div className="row">
                    <div className="input-field col s4">
                        <input
                            id="email"
                            type="email"
                            className="validate"
                            onChange={this
                            .cUsr
                            .bind(this)}
                            value={this.state.usr}/>
                        <label htmlFor="email">Usuario</label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s4">
                        <input
                            id="password"
                            type="password"
                            className="validate"
                            onChange={this
                            .cPw
                            .bind(this)}
                            value={this.state.pw}/>
                        <label htmlFor="password">Contraseña</label>
                    </div>
                </div>
                <button
                    className="btn waves-effect waves-light"
                    onClick={this
                    .logear
                    .bind(this)}>
                    Enviar
                    <i className="material-icons right">send</i>
                </button>
                {sesionIniciada && (<Redirect to={"/"}/>)}
            </div>

        );
    }
}