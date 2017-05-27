//dependencias
import React , {Component} from "react"
import FloatingActionButton from 'material-ui/FloatingActionButton';

//estlos
const style = {
  marginRight: 20,
  position:"relative",
  left :470,
  top:190
//  rigth:5,
};


class BtnBuscarAvanzado extends Component {
	constructor(){

 				super();
 				
 				
 		}

 		//Cargamos los props
 		static propTypes:{
 			enClickAvanzado: PropTypes.func,
 		

 		}
 		

	render(){
		const {enClickAvanzado} = this.props
		return(
			<div  >

				<FloatingActionButton onClick={this.props.enClickAvanzado}  />
    		 
    		
			</div>

			);
	}


}

export default BtnBuscarAvanzado