import React, {Component} from "react";
import {getCommission, editCommission} from "../../../actions/commissionActions";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {Link} from "react-router-dom";

const teamLeadStyle = {
    fontFamily: "'Permanent Marker', cursive",
    textAlign: "center",
    color: "#007bff",
    fontSize: 55,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

class EditCommission extends Component {
    constructor(props) {
        super(props);
        this.state = {
            commissionId:"",
            title:"",
            city:"",
            profession:"",
            description:"",
            errors: {}
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }


    componentWillReceiveProps(nextProps) {
        if (nextProps.errors) {
            this.setState({errors: nextProps.errors});
        }
        const {
            commissionId,
            title,
            city,
            profession,
            description
        } = nextProps.commission;

        this.setState({
            commissionId,
            title,
            city,
            profession,
            description
        })

    }

    componentDidMount() {
        console.log("Params:" + JSON.stringify(this.props.match.params));
        const {commissionId} = this.props.match.params;
        this.props.getCommission(commissionId, this.props.history);
    }


    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e) {
        e.preventDefault();

        const editCommission = {
            commissionId: this.state.commissionId,
            title: this.state.title,
            city: this.state.city,
            profession: this.state.profession,
            description: this.state.description,
        };

        this.props.editCommission(editCommission, this.props.history);
    }

    editCommissionFormContent = () => {
        const{errors} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <h5>
                        Tytul
                    </h5>
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.title
                        })}
                        placeholder="Title"
                        name="title"
                        value={this.state.title}
                        onChange={this.onChange}
                    />
                    {errors.title && (
                        <div className="invalid-feedback">
                            {errors.title}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <h5>
                        Description
                    </h5>
                    <textarea
                        className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.description
                        })}
                        placeholder="description"
                        name="description"
                        value={this.state.description}
                        onChange={this.onChange}
                    />
                    {errors.description && (
                        <div className="invalid-feedback">
                            {errors.description}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <h5>
                        City
                    </h5>
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.city
                        })}
                        placeholder="City"
                        name="city"
                        value={this.state.city}
                        onChange={this.onChange}
                    />
                    {errors.city && (
                        <div className="invalid-feedback">
                            {errors.city}
                        </div>
                    )}
                </div>
                <div className="form-group">
                    <h5>
                        Profession
                    </h5>
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.profession
                        })}
                        placeholder="Profession"
                        name="profession"
                        value={this.state.profession}
                        onChange={this.onChange}
                    />
                    {errors.profession && (
                        <div className="invalid-feedback">
                            {errors.profession}
                        </div>
                    )}
                </div>

                <button
                    type="submit"
                    className="btn btn-success btn-block mt-4"
                    value="Modify"
                >
                    <h2>Edytuj</h2>
                </button>
            </form>
        )
    };

    render() {

        return (
            <div style={{padding:"150px"}}>
                <Link to="/dashboard">
                    <div id="back">
                        Powrot
                    </div>
                </Link>
                <div className="container2">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h1 style={teamLeadStyle}>
                            Edytuj
                            </h1>
                            <hr/>
                            {this.editCommissionFormContent()}
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

EditCommission.propTypes = {
    getCommission: PropTypes.func.isRequired,
    editCommission: PropTypes.func.isRequired,
    commission: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    commission: state.commission.commission,
    errors: state.errors
});

export default connect(mapStateToProps, {getCommission, editCommission})(EditCommission);