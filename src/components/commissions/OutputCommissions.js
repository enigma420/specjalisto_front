import React, {Component} from 'react';
import {MDBCard, MDBCardBody, MDBCardHeader, MDBContainer} from "mdbreact";
import Typography from "@material-ui/core/Typography";
import Commission from "./Commission";
import FiltrSelect from "../filtration_components/FiltrSelect";

class OutputCommissions extends Component {
    render() {
        return (
            <MDBContainer style={{minWidth:'700px' , padding:'25px'}}>
                <MDBCard className="text-center" style={{height:'auto'}}>
                    <MDBCardHeader color="red" style={{borderRadius:'5px 5px 0 0'}}>
                        <Typography variant="h5" style={{fontWeight:'bolder'}}>
                            Zlecenia do wykonania
                        </Typography>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <FiltrSelect/>
                        <hr/>
                        <Commission/>
                        <hr/>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default OutputCommissions;