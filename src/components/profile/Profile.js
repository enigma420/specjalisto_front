import React, {Component} from 'react';
import Panel from "./Panel";
import {Col, Container, Row, Footer} from 'mdbreact';
import PriceList from "./PriceList";
import ModifyProfilePanel from "./ModifyProfilePanel"
import ProfileGallery from "./ProfileGallery";

class Profile extends Component {
    render() {
        return (
            <div style={{padding: '100px 0 0 0' , display:'inline-block'}}>
                <Row>
                    <Col md={1}>

                    </Col>
                    <Col md={4}>
                        <Panel/>
                        <ModifyProfilePanel/>
                    </Col>
                <hr/>
                    <Col md={5}>
                    <PriceList/>
                        <ProfileGallery/>


                    </Col>
                    <Col md={1} xs={12} sm={6}>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Profile;