import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button, Card, CardBody, Collapse} from "reactstrap";
import {deleteCommission} from "../../actions/commissionActions";
import PropTypes from "prop-types"
import {Link} from "react-router-dom";

const buttonStyle = {
    width: '100%',
    height: '100%'
};

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


class CommissionItem extends Component {
    constructor(props) {
        super(props);
        this.onEntering = this.onEntering.bind(this);
        this.onEntered = this.onEntered.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
        this.toggle = this.toggle.bind(this);
        this.state = {collapse: false, status: 'Closed'};
    }

    onEntering() {
        this.setState({status: 'Opening...'});
    }

    onEntered() {
        this.setState({status: 'Opened'});
    }

    onExiting() {
        this.setState({status: 'Closing...'});
    }

    onExited() {
        this.setState({status: 'Closed'});
    }

    toggle() {
        this.setState(state => ({collapse: !state.collapse}));
    }


    onDeleteClick = commissionId => {
        this.props.deleteCommission(commissionId);
    };


    render() {
        const {commission} = this.props;
        return (

                <div className="  card-body ">
                    <div className="card card-body  mb-6">
                        <div className="row">
                            <div className="col-3 border-2" style={{textAlign: 'center'}}>
                                <h3>
                                    <text style={{fontSize:"28px",color:'black',fontWeight:"bolder"}}>{commission.profession}</text>
                                </h3>
                            </div>
                            <div className="col-7 border-3">
                                <div className="border-1" style={{textAlign:'center'}}>
                                    <ul>
                                        <text style={{fontSize:"20px",color:'black'}}>{commission.title}</text>
                                    </ul>

                                    <ul>
                                        <Button size="lg" color="primary" onClick={this.toggle}
                                                style={{marginBottom: '1rem', marginTop: '1rem'}} className="info">
                                            Informacje
                                        </Button>
                                    </ul>
                                    <Collapse
                                        isOpen={this.state.collapse}
                                        onEntering={this.onEntering}
                                        onEntered={this.onEntered}
                                        onExiting={this.onExiting}
                                        onExited={this.onExited}
                                    >
                                        <Card>
                                            <CardBody>
                                                <ul className="list-group" style={textStyle}>
                                                    <h4>Title:</h4>
                                                    <li className="list-group-item">{commission.title}</li>
                                                    <h4>Profession:</h4>
                                                    <li className="list-group-item">{commission.profession}</li>
                                                    <h4>City:</h4>
                                                    <li className="list-group-item">{commission.city}</li>
                                                    <h4>Description:</h4>
                                                    <li className="list-group-item">{commission.description}</li>

                                                </ul>
                                            </CardBody>
                                        </Card>
                                    </Collapse>
                                </div>
                            </div>
                            <div className="col-2">

                                        <Link to={`/editCommission/${commission.commissionId}`}>
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
                                                    commission.commissionId
                                                )}>
                                                    Usuń
                                                </Button>

                                            </li>
                                        </a>
                            </div>
                        </div>
                    </div>
                </div>

        );
    }
}

CommissionItem.propTypes = {
    deleteCommission: PropTypes.func.isRequired
};

export default connect(null,{deleteCommission})(CommissionItem);