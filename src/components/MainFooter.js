import React, {Component} from "react";
import { Col, Container, Row, Footer } from 'mdbreact';
import '../fontawesome.css'
import '../bootstrap.css'
import 'mdbreact/dist/css/mdb.css'
import '../icon.css'
import headerIcon from "../specjalist-icons.png";
class MainFooter extends Component {
    render() {
        return (
            <Footer color="red" className="page-footer font-medium pt-1 mt-5" >
                <Container className="text-left">
                    <Row>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Serwis</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Prywatność</a></li>
                                <li><a href="#!">O nas</a></li>
                                <li><a href="#!">Kontakt</a></li>
                                <li><a href="#!">Regulamin</a></li>
                                <li><a href="#!">Partnerzy</a></li>
                                <li><a href="#!">Dane osobowe</a></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Dla Klientów</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Specjaliści</a></li>
                                <li><a href="#!">Usługi</a></li>
                                <li><a href="#!">Pomoc</a></li>
                                <li><a href="#!">Aplikacja mobilna</a></li>
                            </ul>
                        </Col>
                        <hr className="clearfix w-100 d-md-none" />
                        <Col md="3">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">Dla Specjalistów</h5>
                            <ul className="list-unstyled">
                                <li><a href="#!">Link 1</a></li>
                                <li><a href="#!">Link 2</a></li>
                                <li><a href="#!">Link 3</a></li>
                                <li><a href="#!">Link 4</a></li>
                            </ul>
                        </Col>
                        <Col md="3">
                            <h5 className="text-uppercase mb-4 mt-3 font-weight-bold">
                                <img src={headerIcon} alt="Specjalisto"/>
                                Specjalisto
                            </h5>
                            <p>Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit
                                amet, consectetur adipisicing elit.</p>
                        </Col>
                    </Row>
                </Container>
                <hr />
                <div className="text-center">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a className="mx-2"><i className="fa fa-facebook-square fa-3x" aria-hidden="true"> </i></a></li>
                        <li className="list-inline-item"><a className="mx-2"><i className="fa fa-twitter-square fa-3x" aria-hidden="true"> </i></a></li>
                        <li className="list-inline-item"><a className="mx-2"><i className="fa fa-linkedin fa-3x" aria-hidden="true"/> </a></li>
                        <li className="list-inline-item"><a className="mx-2"><i className="fa fa-instagram fa-3x" aria-hidden="true"> </i></a></li>
                    </ul>
                </div>
                <div className="footer-copyright text-center">
                    <Container >
                        &copy; {(new Date().getFullYear())}  <a href="http://www.specjalisto.pl">Specjalisto.pl</a>
                    </Container>
                </div>
            </Footer>
        );
    }
}

export default MainFooter;