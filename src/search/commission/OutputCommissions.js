import React, {Component} from 'react';
import {MDBCard, MDBCardBody, MDBCardHeader, MDBContainer} from "mdbreact";
import Typography from "@material-ui/core/Typography";
import FiltrSelect from "../search_components/FiltrSelect";
import CommissionItem from "../../components/commission/CommissionItem"
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCommissions} from "../../actions/commissionActions";

class OutputCommissions extends Component {
    componentDidMount() {
        this.props.getCommissions();
    }

    render() {
        const {commissions} = this.props.commission;
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
                        <div>
                            <hr/>
                            {commissions.map(commission => (
                                <CommissionItem key={commission.id} commission={commission}/>
                            ))}
                        </div>
                        <hr/>
                    </MDBCardBody>
                </MDBCard>
            </MDBContainer>
        );
    }
}

OutputCommissions.propTypes = {
    commission: PropTypes.object.isRequired,
    getCommissions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    commission: state.commission
});

export default connect(mapStateToProps, {getCommissions})(OutputCommissions);