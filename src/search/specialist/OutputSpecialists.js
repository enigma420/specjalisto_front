import React, {Component} from 'react';
import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBContainer
} from "mdbreact";
import Typography from "@material-ui/core/Typography/index";
import FiltrSelect from "../search_components/FiltrSelect";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getSpecialists} from "../../actions/specialistActions";
import SpecialistItem from "./SpecialistItem";

class OutputSpecialists extends Component {
    componentDidMount() {
        this.props.getSpecialists();
    }

    render() {
        const {specialists} = this.props.specialist
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
                        <div>
                            <hr/>
                            {specialists.map(specialist => (
                                <SpecialistItem key={specialist.id} specialist={specialist}/>
                            ))}
                        </div>
                    </MDBCardBody>
                </MDBCard>

            </MDBContainer>
        );
    }
}

OutputSpecialists.propTypes = {
    specialist: PropTypes.object.isRequired,
    getSpecialists: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    specialist: state.specialist
});

export default connect(mapStateToProps, {getSpecialists})(OutputSpecialists);