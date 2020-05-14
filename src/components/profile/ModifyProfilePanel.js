import React from 'react';
import {
    MDBContainer,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
} from 'mdbreact';
import Chart from "react-apexcharts";
import Paper from "@material-ui/core/Paper";
import Rating from "@material-ui/lab/Rating";
import {makeStyles} from '@material-ui/core/styles';

import '../profile/SpecialistRating.css'
import RatingLineChart from "./RatingLineChart";




const seriesOpt = {

    optionsRadial: {
        plotOptions: {
            radialBar: {

                hollow: {
                    margin: 0,
                    size: "80%",
                    background: "#fff",
                    image: undefined,
                    imageOffsetX: 0,
                    imageOffsetY: 0,
                    position: "front",
                    dropShadow: {
                        enabled: true,
                        top: 3,
                        left: 0,
                        blur: 4,
                        opacity: 0.5
                    }
                },
                track: {
                    background: "#fff",
                    strokeWidth: "67%",
                    margin: 0, // margin is in pixels
                    dropShadow: {
                        enabled: true,
                        top: -3,
                        left: 0,
                        blur: 4,
                        opacity: 0.65
                    }
                },

                dataLabels: {
                    showOn: "always",
                    name: {
                        offsetY: -20,
                        show: true,
                        color: "black",
                        fontSize: "18px"
                    },
                    value: {
                        formatter: function(val) {
                            return val;
                        },
                        color: "#db4a39",
                        fontSize: "50px",
                        show: true
                    }
                }
            }
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 0.1,
                gradientToColors: ["#db4a39"],
                opacityFrom: 1,
                opacityTo: 1,
                stops: [0, 10]
            }
        },
        stroke: {
            lineCap: "round"
        },
        labels: ["Ogólna Ocena"]
    },
    seriesRadial: [76],



};














const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        margin: '5px'
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    icon: {
        verticalAlign: 'bottom',
        height: 20,
        width: 20,
    },
    details: {
        alignItems: 'center',
    },
    column: {
        flexBasis: '33.33%',
    },
    helper: {
        borderLeft: `2px solid ${theme.palette.divider}`,
        padding: theme.spacing(1, 2),
    },
    link: {
        color: theme.palette.primary.main,
        textDecoration: 'none',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}));


export default function ModifyProfilePanel() {
    const classes = useStyles();

const GeneralRatingSpecialist = () => {
    return(
        <div className="row " style={{margin:'15px 0 0 35px'}}>
            <div className="col-sm-6 rating-block" style={{background: '#ffe6e6', border: '1px solid #fa8484',borderRadius:'5px'}}>
                <div className="pull-left ">

                    <div className="pull-left" style={{width: "180px"}}>
                        <div className="progress" style={{height: "9px", margin: "8px 0"}}>
                            <div className="progress-bar success-color-dark" role="progressbar"
                                 aria-valuenow="5" aria-valuemin="0" aria-valuemax="5"
                                 style={{width: "1000%"}}>
                                <span className="sr-only">80% Complete (danger)</span>

                            </div>

                        </div>

                    </div>
                    <span className="pull-left" style={{width: "35px", lineHeight: 1,marginLeft:'10px'}}>
                                <Rating name="read-only" value={5} max={5} size="large" readOnly/>
                            </span>

                </div>
                <div className="pull-left">
                    <div className="pull-left" style={{width: '180px'}}>
                        <div className="progress" style={{height: "9px", margin: "8px 0"}}>
                            <div className="progress-bar success-color" role="progressbar"
                                 aria-valuenow="4" aria-valuemin="0" aria-valuemax="5"
                                 style={{width: "80%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <span className="pull-left" style={{width: "35px", lineHeight: 1,marginLeft:'10px'}}>
                        <Rating name="read-only" value={4} max={4} size="large" readOnly/>

                    </span>
                </div>
                <div className="pull-left">

                    <div className="pull-left" style={{width: "180px"}}>
                        <div className="progress" style={{height: "9px", margin: "8px 0"}}>
                            <div className="progress-bar yellow" role="progressbar"
                                 aria-valuenow="3" aria-valuemin="0" aria-valuemax="5"
                                 style={{width: "60%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <div className="pull-left" style={{width: "35px", lineHeight: 1,marginLeft:'10px'}}>
                        <Rating name="read-only" value={3} max={3} size="large" readOnly/>

                    </div>
                </div>
                <div className="pull-left">

                    <div className="pull-left" style={{width: "180px"}}>
                        <div className="progress" style={{height: "9px", margin: "8px 0"}}>
                            <div className="progress-bar danger-color" role="progressbar"
                                 aria-valuenow="2" aria-valuemin="0" aria-valuemax="5"
                                 style={{width: "40%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <div className="pull-left" style={{width: "35px", lineHeight: 1,marginLeft:'10px'}}>
                        <Rating name="read-only" value={2} max={2} size="large" readOnly/>
                    </div>
                </div>
                <div className="pull-left">

                    <div className="pull-left" style={{width: "180px"}}>
                        <div className="progress" style={{height: "9px", margin: "8px 0"}}>
                            <div className="progress-bar danger-color-dark" role="progressbar"
                                 aria-valuenow="1" aria-valuemin="0" aria-valuemax="5"
                                 style={{width: "20%"}}>
                                <span className="sr-only">80% Complete (danger)</span>
                            </div>
                        </div>
                    </div>
                    <div className="pull-left" style={{width: "35px", lineHeight: 1,marginLeft:'10px'}}>
                        <Rating name="read-only" value={1} max={1} size="large" readOnly/>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="rating-block" style={{background: '#ffe6e6', border: '1px solid #fa8484',borderRadius:'3px' , textAlign:'center'}}>
                    <h4>Średnia Ocena Specjalisty</h4>
                    <h2 className="bold padding-bottom-7">4 <small>/ 5</small></h2>
                    <Rating name="read-only" value={4} size="large" readOnly/>
                </div>
            </div>
                <RatingLineChart/>
                    <Chart
                        options={seriesOpt.optionsRadial}
                        series={seriesOpt.seriesRadial}
                        type="radialBar"
                        width="240"
                        style={{marginTop:'30px'}}
                    />

        </div>
    )
};

const Opinions = () => {
    return(
        <div className="row" >
            <div className="col-sm-12">
                <hr/>
                <div className="review-block" style={{background: '#ffe6e6'}}>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                                 className="img-rounded"/>
                            <div className="review-block-name"><a href="#">nktailor</a></div>
                            <div className="review-block-date">January 29, 2016<br/>1 day ago</div>
                        </div>
                        <div className="col-sm-9">
                                <Rating name="read-only" value={5} size="large" style={{fontSize:'25px'}} readOnly/>
                            <div className="review-block-title">this was nice in buy</div>
                            <div className="review-block-description">this was nice in buy. this was nice in
                                buy. this was nice in buy. this was nice in buy this was nice in buy this
                                was nice in buy this was nice in buy this was nice in buy
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                                 className="img-rounded"/>
                            <div className="review-block-name"><a href="#">nktailor</a></div>
                            <div className="review-block-date">January 29, 2016<br/>1 day ago</div>
                        </div>
                        <div className="col-sm-9">
                            <Rating name="read-only" value={3} size="large" style={{fontSize:'25px'}} readOnly/>

                            <div className="review-block-title">this was nice in buy</div>
                            <div className="review-block-description">this was nice in buy. this was nice in
                                buy. this was nice in buy. this was nice in buy this was nice in buy this
                                was nice in buy this was nice in buy this was nice in buy
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-sm-3">
                            <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                                 className="img-rounded"/>
                            <div className="review-block-name"><a href="#">nktailor</a></div>
                            <div className="review-block-date">January 29, 2016<br/>1 day ago</div>
                        </div>
                        <div className="col-sm-9">
                            <Rating name="read-only" value={2} size="large" style={{fontSize:'25px'}} readOnly/>

                            <div className="review-block-title">this was nice in buy</div>
                            <div className="review-block-description">this was nice in buy. this was nice in
                                buy. this was nice in buy. this was nice in buy this was nice in buy this
                                was nice in buy this was nice in buy this was nice in buy
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

    const SumUpRatingSpecialist = () => {
        return (
                <div style={{background: '#ffe6e6', border: '2px solid #fa8484',minWidth:'650px',borderRadius:'3px'}} >
                   <GeneralRatingSpecialist/>
                   <UniqueCustomerOpinions/>
                   <Opinions/>

                </div>
        )
    };

    const UniqueCustomerOpinions = () => {
        return(
            <MDBContainer>
                <section className='text-center my-1'>

                    <hr/>
                    <MDBCarousel
                        activeItem={1}
                        length={3}
                        interval={5000}
                        className='no-flex'
                        style={{color:'black'}}
                        showControls={false}
                        showIndicators={false}

                    >
                        <MDBCarouselInner
                        >
                            <MDBCarouselItem itemId='1'>
                                <h4 className='font-weight-bold'>Anna Deynah</h4>
                                <img
                                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg'
                                    className='rounded-circle img-fluid'
                                    alt=''
                                    width="120px"
                                    style={{boxShadow:'0 0 15px 1px rgba(0,0,0,0.49)'}}
                                />
<div> <Rating name="read-only" value={5} size="large" readOnly/></div>
                                <div >
                                    Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Quod eos id officiis hic tenetur
                                    quae quaerat ad velit ab. Lorem ipsum dolor sit amet,
                                    consectetur adipisicing elit. Dolore cum accusamus eveniet
                                    molestias voluptatum inventore laboriosam labore sit,
                                    aspernatur praesentium iste impedit quidem dolor veniam.
                                </div>


                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='2'>
                                <h4 className='font-weight-bold'>Maria Kate</h4>
                                <img
                                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(31).jpg'
                                    className='rounded-circle img-fluid'
                                    alt=''
                                    width="120px"
                                    style={{boxShadow:'0 0 15px 1px rgba(0,0,0,0.49)'}}
                                />
                                <div> <Rating name="read-only" value={5} size="large" readOnly/></div>
                                <p>
                                     Nemo enim ipsam voluptatem quia
                                    voluptas sit aspernatur aut odit aut fugit, sed quia
                                    consequuntur magni dolores eos qui ratione voluptatem sequi
                                    nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                                    dolor sit amet, consectetur, adipisci velit, sed quia non
                                    numquam eius modi tempora incidunt ut labore.
                                </p>
                            </MDBCarouselItem>
                            <MDBCarouselItem itemId='3'>
                                <h4 className='font-weight-bold'>John Doe</h4>

                                <img
                                    src='https://mdbootstrap.com/img/Photos/Avatars/img%20(3).jpg'
                                    className='rounded-circle img-fluid'
                                    alt=''
                                    width="120px"
                                    style={{boxShadow:'0 0 15px 1px rgba(0,0,0,0.49)'}}
                                />
                                <div> <Rating name="read-only" value={3} size="large" readOnly/></div>
                                <p>
                                    Duis aute irure dolor in
                                    reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non
                                    proident, sunt in culpa qui officia deserunt mollit anim id
                                    est laborum. Sed ut perspiciatis unde omnis iste natus error
                                    sit voluptatem accusantium doloremque laudantium.
                                </p>
                            </MDBCarouselItem>
                        </MDBCarouselInner>
                    </MDBCarousel>
                </section>
            </MDBContainer>
        )
    }

    return (
        <Paper elevation={3} style={{minWidth: '720px'}}>
                <SumUpRatingSpecialist/>
        </Paper>

    );
};
