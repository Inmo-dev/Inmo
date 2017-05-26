//Mantiene el estado de la interfaz, y las acciones a las que reacciona

//Todas las acciones se mantienen en el indice de acciones, para mantener un nombre comun
import {ALTERNAR_DRAWER} from '../acciones/indice.jsx';

export default function(state, action){

	switch(action.type){
		case ALTERNAR_DRAWER:
			return Object.assign(state, {open: action.payload});
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