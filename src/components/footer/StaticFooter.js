import React from "react";
import {Col, Container, Row, Footer} from 'mdbreact';
import '../../fontawesome.css'
import '../../bootstrap.css'
import 'mdbreact/dist/css/mdb.css'
import SocialMediaIcons from "./SocialMediaIcons";
import CopyRights from "../small_components/CopyRights";
import Logo from "../small_components/Logo";

export default function StaticFooter() {

    const CustomerInfoColumn = () => {
        return (
            <Col md="4" style={{textAlign: 'center'}}>
                <h1 className="text-uppercase mb-3 mt-3 font-weight-bold">Dla Klientów</h1>
                <ul className="list-unstyled">
                    <li><a href="#"><h4>Specjaliści</h4></a></li>
                    <li><a href="#"><h4>Usługi</h4></a></li>
                    <li><a href="#"><h4>Pomoc</h4></a></li>
                    <li><a href="#"><h4>Aplikacja mobilna</h4></a></li>
                </ul>
            </Col>
        )
    };
    const SpecialistInfoColumn = () => {
        return (
            <Col md="4" style={{textAlign: 'center'}}>
                <h1 className="text-uppercase mb-3 mt-3 font-weight-bold">Dla Specjalistów</h1>
                <ul className="list-unstyled">
                    <li><a href="#"><h4>Link 1</h4></a></li>
                    <li><a href="#"><h4>Link 2</h4></a></li>
                    <li><a href="#"><h4>Link 3</h4></a></li>
                    <li><a href="#"><h4>Link 4</h4></a></li>
                </ul>
            </Col>
        )
    };
    const GeneralInfoColumn = () => {
        return (
            <Col md="4" style={{textAlign: 'center'}}>
                <h1 className="text-uppercase mb-3 mt-2 font-weight-bold">
                    <Logo/>
                </h1>
                <ul className="list-unstyled">
                    <li><a href="#"><h4>Prywatność</h4></a></li>
                    <li><a href="#"><h4>O nas</h4></a></li>
                </ul>
            </Col>
        )
    };

    return (
        <Footer color="red" className="page-footer font-medium pt-1 mt-5" >
            <Container className="text_footer">
                <Row className="text_footer">
                    <hr className="clearfix w-100 d-md-none"/>
                    <CustomerInfoColumn/>
                    <hr className="clearfix w-100 d-md-none"/>
                    <SpecialistInfoColumn/>
                    <hr className="clearfix w-100 d-md-none"/>
                    <GeneralInfoColumn/>
                </Row>
            </Container>
            <hr/>
            <SocialMediaIcons/>
            <div className="footer-copyright text-center">
                <CopyRights/>
            </div>
        </Footer>
    );

}
