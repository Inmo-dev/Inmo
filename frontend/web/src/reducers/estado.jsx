import {combineReducers} from 'redux';
//Todos los diferentes estados de la aplicacion
import Sesion from './sesion.jsx';
import Interfaz from './interfaz.jsx'

//Estos estados se combinan en uno solo
const estado = combineReducers({
	sesion: Sesion,
	interfaz: Interfaz
})

export default estado