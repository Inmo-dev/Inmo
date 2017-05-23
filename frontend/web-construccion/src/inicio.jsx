//Polyfill son todas las funciones que aun no se implementan en ES5
import "babel-polyfill";
//React
import React, { Component } from 'react';
//React DOM es el motor de visualizacion para html DOM
import { render } from 'react-dom';
//Carrusel material
import { AutoRotatingCarousel, Slide } from 'material-auto-rotating-carousel'
//Colores material
import { red400, red600, blue400, blue600, cyan100, cyan300, orange400, orange600, lightGreen400, lightGreen600} from 'material-ui/styles/colors'
//Necesario para funciones en dispositivos moviles
import injectTapEventPlugin from 'react-tap-event-plugin';
//Necesaio para usar material-ui, da estilo a todos los componentes
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


//Debe ser lo primero en ejecutar al usar material-ui
injectTapEventPlugin();

//Cada componente es una clase que extienden de react/Component
class LogoMulti extends Component {

  //Un componente debe retornar solamente *UN* nodo DOM, si el componente está compuesto
  //por varios otros componentes, es comun encerrarlo todo en un <div> *solo si es neces
  //sario*, a veces es mejor separarlo en sub-componentes.
    render(){
        return(
            <div className={"fadein"}>
                <img id="f4" src="https://i.imgur.com/zjPZmBY.png"></img>
                <img id="f3" src="https://i.imgur.com/QCtEzBv.png"></img>
                <img id="f2" src="https://i.imgur.com/aWzDtCz.png"></img>
                <img id="f1" src="https://i.imgur.com/t3Z2w2h.png"></img>
            </div>
        );
    }
}

class Inicio extends Component {
    render(){
        return (

            //Cada componente declarado puede usare como si fuera codigo HTML común
            <MuiThemeProvider>
        	<div>
              <div className={"ald"}> </div>
              <AutoRotatingCarousel
                label="Muy pronto"
                open
                style={{backgroundColor:"none"}}
                interval={5000}
              >
                <Slide
                  media={<LogoMulti />}
                  mediaBackgroundStyle={{ backgroundColor: cyan100 }}
                  contentStyle={{ backgroundColor: cyan300 }}
                  title="Tu solución inmobiliaria."
                  subtitle="El manejo de tus inmuebles. Una sola plataforma."
                />

                <Slide
                  media={<img className={"imgSplash"} src="https://i.imgur.com/aWzDtCz.png" />}
                  mediaBackgroundStyle={{ backgroundColor: blue400 }}
                  contentStyle={{ backgroundColor: blue600 }}
                  title="Para empresas."
                  subtitle="Porque sus necesidades, son tambien escuchadas. Avalada por la Cámara inmobiliaria de Venezuela."
                />

                <Slide
                  media={<img className={"imgSplash"} src="https://i.imgur.com/QCtEzBv.png" />}
                  mediaBackgroundStyle={{ backgroundColor: lightGreen400 }}
                  contentStyle={{ backgroundColor: lightGreen600 }}
                  title="Para empresarios."
                  subtitle="Nunca fue mas sencillo encontrar ese local que buscas. ¡ Al mejor precio !"
                />

                <Slide
                  media={<img className={"imgSplash"} src="https://i.imgur.com/2kabgUc.png" />}
                  mediaBackgroundStyle={{ backgroundColor: orange400 }}
                  contentStyle={{ backgroundColor: orange600 }}
                  title="Para tu hogar."
                  subtitle="¿Buscas tu hogas cerca de una escuela? ¿de un banco? te ayudamos en eso."
                />
                
              </AutoRotatingCarousel>
            </div>
            </MuiThemeProvider>
        	);
    }
}

//Se le indica a react que toda la aplicacion se va a dibujar en este contenedor. Una aplicacion
//react debe tener solamente un componente raiz, en este caso la raiz es el componente <Inicio>
render(<Inicio />, document.getElementById('contenedor'));