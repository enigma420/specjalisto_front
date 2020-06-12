import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {Link} from "react-router-dom";
import {create} from "../../../actions/opinionActions"

const teamLeadStyle = {
    fontFamily: "'Permanent Marker', cursive",
    textAlign: "center",
    color: "#db4a39",
    fontSize: 55,
    textShadow: "-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black"
};

class CreateOpinion extends Component {
    constructor(props) {
        super(props);

        this.state = {
            opinionId: "",
            title: "",
            description: "",
            rate: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }
    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }

    onSubmit(e){
        e.preventDefault();
        const newOpinion = {
            title: this.state.title,
            description: this.state.description,
            rate: this.state.rate,
        };
        this.props.create(newOpinion, this.props.history);
    }

    createOpinionForm = () => {
        const {errors} = this.state;
        return(
            <form onSubmit={this.onSubmit}>
                <div className="form-group">
                    <h5>
                        Title
                    </h5>
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg" , {
                            "is-invalid": errors.title
                        })}
                        placeholder="Tytul"
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
                    <input
                        type="text"
                        className={classnames("form-control form-control-lg", {
                            "is-invalid": errors.description
                        })}
                        placeholder="Description"
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
                        Rate
                    </h5>
                    <textarea

                        className={classnames("form-control form-control-lg" , {
                            "is-invalid": errors.rate
                        })}
                        placeholder="rate"
                        name="rate"
                        value={this.state.rate}
                        onChange={this.onChange}
                    />
                    {errors.rate && (
                        <div className="invalid-feedback">
                            {errors.rate}
                        </div>
                    )}

                </div>
                <br/>
                <button type="submit" className="btn btn-primary btn-block ">
                    <h2>Wystaw Opinie</h2>
                </button>
            </form>
        )
    }

    render() {

        return (
            <div style={{padding:"100px"}}>
                <Link to="/dashboard">
                    <div id="back">
                        Powrot
                    </div>
                </Link>
                <div className="container2">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <h6 style={teamLeadStyle}>
                               Wystaw Opinie
                            </h6>
                            <hr/>
                            {this.createOpinionForm()}
                        </div>
                    </div>

                </div>

            </div>
        );
    }
}

CreateOpinion.propTypes = {
    create: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    errors: state.errors
});

export default connect(mapStateToProps,{create})(CreateOpinion);