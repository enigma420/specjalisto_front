import React, {Component} from 'react';
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import Divider from "@material-ui/core/Divider";
export default function CommissionDetails() {
    return (
        <div style={{width: '100%'}} className="row">
            <div className="column">
                <div className="containers">
                    <div className="corner"><span style={{color: 'white', fontWeight: 'bolder'}}>Zlecenie</span>
                    </div>
                </div>
                <hr/>
                <div className="containers">
                    <div className="corner"><span style={{color: 'white', fontWeight: 'bolder'}}>Szybko</span>
                    </div>
                </div>
            </div>
            <div className="column">
                <MDBCol style={{ maxWidth: "28rem" }}>
                        <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
                                      waves />
                        <MDBCardBody>
                            <MDBCardTitle>Naprawienie laptopa</MDBCardTitle>
                            <MDBCardText>Potrzebuje informatyka ktory naprawi moj laptop marki DELL, problem polega na rozjebanej obudowie</MDBCardText>
                            <MDBBtn href="#" color="red">Szczegóły Zlecenia</MDBBtn>
                        </MDBCardBody>
                </MDBCol>
            </div>


        </div>
    );
}
