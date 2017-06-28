import React, {Component} from "react";

export default class Footer extends Component {

    render() {
        return (
            <footer className="page-footer">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Inmo - Alpha</h5>
                            <p className="grey-text text-lighten-4">V0.1.1</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Enlaces de interés</h5>
                            <ul>
                                <li>
                                    <a className="grey-text text-lighten-3" href="#!">Preguntas frecuentes</a>
                                </li>
                                <li>
                                    <a className="grey-text text-lighten-3" href="#!">Contacto</a>
                                </li>
                                <li>
                                    <a className="grey-text text-lighten-3" href="#!">Ayuda</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright">
                    <div className="container">
                        © 2017 Inmo | C.I.E.B
                        <a className="grey-text text-lighten-4 right" href="#!">Sobre nosotros</a>
                    </div>
                </div>
            </footer>
        );
    }

}