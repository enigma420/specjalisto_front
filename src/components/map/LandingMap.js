import React, {Component} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCardFooter, MDBCardHeader, MDBCardTitle, MDBContainer} from "mdbreact";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";


export default class LandingMap extends Component {


    render() {

        return (
            <div  style={{margin:"0 auto",textAlign:'center',padding:'10px',minWidth:'1040px',maxWidth:'1380px'}}>
            <div  style={{minWidth:'1085px'}}>
                <h2 style={{fontWeight:'bolder',textAlign:'center'}}>Wybierz wojewodztwo aby znalezc swojego specjaliste !</h2>
<hr/>
            <div id="map-poland">
                <ul className="poland">
                    <li className="pl1" style={{fontWeight:'bolder'}}><a href="#dolnoslaskie" >Dolnośląskie</a></li>
                    <li className="pl2"><a href="#kujawsko-pomorskie">Kujawsko-pomorskie</a></li>
                    <li className="pl3"><a href="#lubelskie">Lubelskie</a></li>
                    <li className="pl4"><a href="#lubuskie">Lubuskie</a></li>
                    <li className="pl5"><a href="#lodzkie">Łódzkie</a></li>
                    <li className="pl6"><a href="#malopolskie">Małopolskie</a></li>
                    <li className="pl7"><a href="#mazowieckie">Mazowieckie</a></li>
                    <li className="pl8"><a href="#opolskie">Opolskie</a></li>
                    <li className="pl9"><a href="#podkarpackie">Podkarpackie</a></li>
                    <li className="pl10"><a href="#podlaskie">Podlaskie</a></li>
                    <li className="pl11"><a href="#pomorskie">Pomorskie</a></li>
                    <li className="pl12"><a href="#slaskie">Śląskie</a></li>
                    <li className="pl13"><a href="#swietokrzyskie">Świętokrzyskie</a></li>
                    <li className="pl14"><a href="#warminsko-mazurskie">Warmińsko-mazurskie</a></li>
                    <li className="pl15"><a href="#wielkopolskie">Wielkopolskie</a></li>
                    <li className="pl16"><a href="#zachodniopomorskie">Zachodniopomorskie</a></li>
                </ul>
            </div>
                    <MDBContainer style={{minWidth:'300px' , padding:'25px', position:'sticky', top:'10%'}}>
                        <MDBCard className="text-center" style={{height:'auto'}}>
                            <MDBCardHeader color="red" style={{borderRadius:'5px 5px 0 0'}}>
                                <Typography variant="h5" style={{fontWeight:'bolder'}}>
                                    Wojewodztwo
                                </Typography>
                            </MDBCardHeader>
                            <MDBCardBody>
                                <MDBCardTitle style={{fontSize:'16px', fontWeight:'bolder',height:'20px'}}>
                                    <div id="demo-agents">
                                        <li id="mazowieckie">
                                            Stan: 12853 Specjalistów
                                            <Grid item>
                                                <a href="#" variant="body2">
                                                    Szczegolowy wykaz specjalistow
                                                </a>
                                            </Grid>
                                        </li>
                                    </div>
                                </MDBCardTitle>
                            </MDBCardBody>

                        </MDBCard>
                    </MDBContainer>

            </div>
            </div>
        );
    }
}


