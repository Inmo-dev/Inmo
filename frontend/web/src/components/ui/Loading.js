import React, { Component } from "react";
import { inject, observer } from "mobx-react";


@inject("store")
@observer
export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store.interfaz;
    }

    render() {
        return (
            <div class="progress">
                <div class="indeterminate"></div>
            </div>
        )
    }
}