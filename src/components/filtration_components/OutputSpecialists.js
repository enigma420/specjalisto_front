import React, {Component} from 'react';
import {
    Col,
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardText,
    MDBCardTitle,
    MDBContainer
} from "mdbreact";
import Typography from "@material-ui/core/Typography";
import FiltrSelect from "./FiltrSelect";
import Specialist from "./Specialist";

class OutputSpecialists extends Component {
    render() {
        return (
            <MDBContainer style={{minWidth:'700px' , padding:'25px'}}>
                <MDBCard className="text-center" style={{height:'auto'}}>
                    <MDBCardHeader color="red" style={{borderRadius:'5px 5px 0 0'}}>
                        <Typography variant="h5" style={{fontWeight:'bolder'}}>
                            Specjaliści
                        </Typography>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <FiltrSelect/>
                        <hr/>
                        <Specialist/>
                        <hr/>
                        <Specialist/>
                        <hr/>
                        <Specialist/>
                        <hr/>
                        <Specialist/>
                        <hr/>
                        <Specialist/>
                        <hr/>
                        <Specialist/>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        );
    }
}

export default OutputSpecialists;