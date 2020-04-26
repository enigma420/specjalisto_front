import React, {Component} from 'react';
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import {
    Col,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardText,
    MDBCardTitle,
    MDBContainer, Row
} from "mdbreact";
import Panel from "./profile/Panel";
import ModifyProfilePanel from "./profile/ModifyProfilePanel";
import PriceList from "./profile/PriceList";
import ProfileGallery from "./profile/ProfileGallery";
import Typography from "@material-ui/core/Typography";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import FormControl from "@material-ui/core/FormControl";
import ProvinceSelect from "./search_components/ProvinceSelect";
import CitySelect from "./search_components/CitySelect";
import ProfessionSelect from "./search_components/ProfessionSelect";
import SearchSpecialists from "./search_components/SearchSpecialists";
import OutputSpecialists from "./filtration_components/OutputSpecialists";

class Specialists extends Component {
    render() {
        return (
                <div style={{padding: '100px 0 0 100px'}}>
                    <Paper style={{padding:'10px',margin:'10px', borderRadius:'20px',minWidth:'1135px'}}>
                    <Row>
                        <Col md={4}>
                            <SearchSpecialists/>
                        </Col>
                        <Col md={8}>
                              <OutputSpecialists/>
                        </Col>
                    </Row>
                    </Paper>
                </div>

        );
    }
}

export default Specialists;