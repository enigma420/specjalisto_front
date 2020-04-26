import React, {Component} from 'react';
import {
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
import ProvinceSelect from "../../../src/components/search_components/ProvinceSelect";
import CitySelect from "../../../src/components/search_components/CitySelect";
import ProfessionSelect from "../../../src/components/search_components/ProfessionSelect";
import headerIcon from "../../specjalist-icons.png";
import Logo from "../small_components/Logo";

class SearchCommissions extends Component {
    render() {
        return (
            <MDBContainer style={{minWidth:'300px' , padding:'25px', position:'sticky', top:'10%'}}>
                <MDBCard className="text-center" style={{height:'auto'}}>
                    <MDBCardHeader color="red" style={{borderRadius:'5px 5px 0 0'}}>
                        <Typography variant="h5" style={{fontWeight:'bolder'}}>
                            Wyszukiwarka
                        </Typography>
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardTitle style={{fontSize:'16px', fontWeight:'bolder'}}>Wyszukaj Zlecenie do wykonania ze swojej okolicy !</MDBCardTitle>
                        <div style={{margin:'10px'}}>
                            <ProvinceSelect/>
                        </div>
                        <div style={{margin:'10px'}}>
                            <CitySelect/>
                        </div>
                        <div>
                            <ProfessionSelect/>
                        </div>
                        <MDBBtn color="red" size="lg" style={{borderRadius:'8px'}}>
                            <Typography variant="h6" style={{fontWeight:'bolder'}}>
                                Szukaj
                            </Typography>
                        </MDBBtn>
                    </MDBCardBody>
                    <MDBCardFooter color="red"  style={{borderRadius:'0 0 5px 5px'}}>
                        <Logo/>
                         </MDBCardFooter>
                </MDBCard>
            </MDBContainer>
        );
    }
}

export default SearchCommissions;