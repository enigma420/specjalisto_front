import React, {Component} from 'react';
import OpinionItem from "./OpinionItem";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {getCommissions} from "../../actions/commissionActions";
import {getOpinions} from "../../actions/opinionActions";

class OpinionList extends Component {
    componentDidMount() {
        this.props.getOpinions();
    }

    render() {
        const {opinions} = this.props.opinion
        return (
            <div>
                {opinions.map(opinion => (
                    <OpinionItem key={opinion.id} opinion={opinion}/>
                ))}
            </div>
        );
    }
}

OpinionList.propTypes = {
    opinion: PropTypes.object.isRequired,
    getOpinions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
    opinion: state.opinion
});

export default connect(mapStateToProps, {getOpinions})(OpinionList);