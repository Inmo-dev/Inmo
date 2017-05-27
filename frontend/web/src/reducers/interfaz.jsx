//Mantiene el estado de la interfaz, y las acciones a las que reacciona

//Todas las acciones se mantienen en el indice de acciones, para mantener un nombre comun
import {ACCION_ALTERNAR_DRAWER, ACCION_BUSCAR} from '../acciones/indice.jsx';

export default function(state, action){
	console.log(action.type);
	switch(action.type){
		case ACCION_ALTERNAR_DRAWER:
			return Object.assign(state, {open: action.payload});
		break;

		case ACCION_BUSCAR:
			action.payload.push('/buscar');
			return Object.assign(state, {open: false});
		break;

		default:
			return {
	    		notificaciones: 1,
	        	mensajes: 0,
	    		titulo: "Inmo",
	    		open: false
  			};
  			break;
	}	
};