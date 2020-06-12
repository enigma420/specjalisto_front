import React, {Component} from 'react';
import CreateCommissionButton from "./CreateCommissionButton";
import CommissionItem from "./CommissionItem";
import {getCommissions} from "../../actions/commissionActions";
import {connect} from "react-redux";
import PropTypes from "prop-types"
import Commission from "./Commission";

class CommissionList extends Component {

    componentDidMount() {
        this.props.getCommissions();
    }

    render() {
        const {commissions} = this.props.commission
        return (
            <div style={{padding: "150px", textAlign: "center"}}>
                <Commission/>
                <hr/>
                <CreateCommissionButton/>
                <div>
                    <hr/>
                    {commissions.map(commission => (
                        <CommissionItem key={commission.id} commission={commission}/>
                    ))}
                </div>
            </div>

        );
    }
}

CommissionList.propTypes = {
    commission: PropTypes.object.isRequired,
    getCommissions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    commission: state.commission
});

export default connect(mapStateToProps, {getCommissions})(CommissionList);