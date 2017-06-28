import React, { Component } from "react";
import { inject, observer } from "mobx-react";
import { Link, withRouter } from "react-router-dom";

@withRouter
@inject("store")
@observer
export default class NavBar extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store.sesion;
    }

    menu(logeado) {
        const menuLogin = [<li key={11} className="waves-effect waves-light"> <Link to="perfil" > {this.store.datosUsuario.nombre} </Link> </li>,
                           <li key={12} className="waves-effect waves-light"> <Link to="configuraciones" > Configuraciones </Link> </li>,
                           <li key={13} className="waves-effect waves-light"> <Link to="mensajes" > Mensajes </Link> </li>,
                           <li key={14} className="waves-effect waves-light"> <Link to="logout" > Cerrar sesión </Link> </li>
                           ];

        const menuNoLogin = [<li key={21} className="waves-effect waves-light"> <Link to="login"> Inicia sesión </Link> </li>, 
                             <li key={22} className="waves-effect waves-light"> <Link to="registro"> Registrate </Link> </li>
                             ];
        
        const menuTodos = [];
        
        return logeado ? menuTodos.concat(menuLogin) : menuTodos.concat(menuNoLogin);
    }

    render() {
        const { sesionIniciada } = this.store;
        
        return (
            <div className="navbar-fixed">
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo waves-effect waves-light"> Inmo </Link>
                        <ul className="right">
                            {this.menu.bind(this)(sesionIniciada)}
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}