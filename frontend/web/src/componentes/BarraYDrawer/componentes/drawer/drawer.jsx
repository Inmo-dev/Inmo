import React, { Component, PropTypes } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {irAPaginaBuscar} from '../../../../acciones/interfaz.jsx';
import { withRouter } from 'react-router-dom';
///
import Divider from 'material-ui/Divider';
import MenuItem from 'material-ui/MenuItem';
import Drawer from 'material-ui/Drawer';
import Avatar from 'material-ui/Avatar';
import Build from 'material-ui/svg-icons/action/build';
import Map from 'material-ui/svg-icons/maps/map';
import Search from 'material-ui/svg-icons/action/search';
import Bookmark from 'material-ui/svg-icons/action/bookmark';
import Language from 'material-ui/svg-icons/action/language';
import Message from 'material-ui/svg-icons/communication/message';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
///

class InmoDrawer extends Component {
    render(){
        return (
			<Drawer 
				docked={false}
				width={300}
				open={this.props.open}
                onRequestChange={this.props.onRequestChange}
				>

				 <Card  style={{backgroundColor: '#2196F3'}}>
					<CardHeader
					  title={this.props.usuario.nombre + " " + this.props.usuario.apellido}
					  subtitle={this.props.usuario.correo}
					  avatar={<Avatar size={40} 
					  				  src={this.props.usuario.fotoPerfil}
					  				  /> }
					/>

					<CardActions>
					  <FlatButton icon={<Language />} hoverColor="rgba(0, 0, 0, 0)" style={{marginLeft:"90px"}} />
					  <FlatButton icon={<Message />} hoverColor="rgba(0, 0, 0, 0)" style={{marginLeft:"0px"}} />
					</CardActions>
				</Card>
					         
				<MenuItem leftIcon={<Build />} >Configuración</MenuItem>
				<MenuItem leftIcon={<Bookmark />} >Inmuebles guardados</MenuItem>

				<MenuItem 
					leftIcon={<Search />}
					onTouchTap={() => this.props.clickBuscar(this.props.history)}
					>
					Buscar
				</MenuItem>

				<MenuItem leftIcon={<Map />} >Mapa</MenuItem>

			</Drawer>
        	);
    }
}

InmoDrawer.contextTypes = {
  router: PropTypes.shape({
    history: PropTypes.object.isRequired
  })
};

function mapStateToProps(state){
  return {
    usuario: state.sesion.usuario
  };
}

function matchDispatchToProps(dispatch){
  return bindActionCreators({
    clickBuscar: irAPaginaBuscar
  }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(withRouter(InmoDrawer))