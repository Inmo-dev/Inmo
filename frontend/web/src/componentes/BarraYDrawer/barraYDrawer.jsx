import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Barra from './componentes/barra/barra.jsx';
import Drawer from './componentes/drawer/drawer.jsx';
import {alternarDrawer} from '../../acciones/interfaz.jsx';


class BarraYDrawer extends Component {
  render(){
    return (
        <div>
            <Barra 
                titulo={this.props.titulo}
                clickMenu={() => this.props.clickBoton(this.props.open)}
                />

            <Drawer 
                open={this.props.open}
                onRequestChange={() => this.props.clickBoton(this.props.open)}
                />  
        </div>                     
    );
  }
}

function mapStateToProps(state){
  return {
    titulo: state.interfaz.titulo,
    open: state.interfaz.open
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clickBoton: alternarDrawer
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(BarraYDrawer);