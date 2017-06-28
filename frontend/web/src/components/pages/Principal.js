import React, { Component } from "react";
import { inject, observer } from "mobx-react";

@inject("store")
@observer
export default class Principal extends Component {
    render() {
        return (
            <div className="container">
            <h1 className="center-align"> Pagina principal </h1>
            </div>
        );
    }
}