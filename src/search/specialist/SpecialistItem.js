import React, {Component} from 'react';
import Rating from "@material-ui/lab/Rating/Rating";
import {connect} from "react-redux";

class SpecialistItem extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        const {specialist} = this.props
        return (
            <div className="row">
                <div className="col-sm-3">
                    <img src="http://dummyimage.com/60x60/666/ffffff&text=No+Image"
                         className="img-rounded"/>
                    <div className="review-block-name"><a href="#">nktailor</a></div>
                    <div className="review-block-date">January 29, 2016<br/>1 day ago</div>
                </div>
                <div className="col-sm-9">
                    <Rating name="read-only" value={specialist.name} size="large" style={{fontSize:'25px'}} readOnly/>
                    <div className="review-block-title">{specialist.surname}</div>
                    <div className="review-block-description">{specialist.profession}
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(null)(SpecialistItem);