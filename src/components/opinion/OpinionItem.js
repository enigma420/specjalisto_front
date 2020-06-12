import React, {Component} from 'react';
import Rating from "@material-ui/lab/Rating/Rating";
import {deleteOpinion} from "../../actions/opinionActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

const editAndDeleteButtonStyle = {
    textAlign: 'center',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bolder',
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

const textStyle = {
    color:"black",
    fontSize:"14px",
}
class OpinionItem extends Component {
    constructor(props) {
        super(props);

    }

    onDeleteClick = commissionId => {
        this.props.deleteOpinion(commissionId);
    };

    render() {
    const {opinion} = this.props
        return (
            <div className="row">
                <div className="col-sm-3">
                    <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                         className="img-rounded"/>
                    <div className="review-block-name"><a href="#">nktailor</a></div>
                    <div className="review-block-date">January 29, 2016<br/>1 day ago</div>
                </div>
                <div className="col-sm-9">
                    <Rating name="read-only" value={opinion.rate} size="large" style={{fontSize:'25px'}} readOnly/>
                    <div className="review-block-title">{opinion.title}</div>
                    <div className="review-block-description">{opinion.description}
                    </div>
                    <div className="col-2">

                        <Link to={`/editOpinion/${opinion.opinionId}`}>
                            <li style={editAndDeleteButtonStyle}>
                                <Button size="lg">Edytuj </Button>
                            </li>
                        </Link>
                        <a href="#">
                            <li style={editAndDeleteButtonStyle}>
                                <Button
                                    size="lg"
                                    onClick={this.onDeleteClick.bind(
                                        this,
                                        opinion.opinionId
                                    )}>
                                    Usuń
                                </Button>

                            </li>
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

OpinionItem.propTypes = {
    deleteOpinion: PropTypes.func.isRequired
};

export default connect(null,{deleteOpinion})(OpinionItem);