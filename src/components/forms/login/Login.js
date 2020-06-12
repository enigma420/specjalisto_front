import React, {Component} from 'react';
import PropTypes from "prop-types";
import {connect} from "react-redux";
import classnames from "classnames";
import {login} from "../../../actions/securityActions";
import {Link} from "react-router-dom";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            mail: "",
            password: "",
            errors: {}
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        if (this.props.security.validToken) {
            this.props.history.push("/");
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.security.validToken){
            this.props.history.push("/")
        }
        if(nextProps.errors){
            this.setState({errors: nextProps.errors});
        }
    }



    onSubmit(e){
        e.preventDefault();
        const LoginRequest = {
            mail: this.state.mail,
            password: this.state.password
        };

        this.props.login(LoginRequest);
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value});
    }


    render() {
        const {errors} = this.state;
        return (
            <Container component="main" maxWidth="xs" style={{padding:'20px'}}>
                <CssBaseline />
                <div >
                    <Avatar >
                        <LockOutlinedIcon fontSize="large"/>
                    </Avatar>
                    <Typography component="h1" variant="h3">
                        Logowanie
                    </Typography>
                    <form onSubmit={this.onSubmit}>
                        <TextField
                            type="text"
                            className={classnames("form-control form-control-lg" , {
                                "is-invalid": errors.mail
                            })}
                            placeholder="Email Address"
                            name="mail"
                            value={this.state.mail}
                            onChange={this.onChange}
                        />
                        <TextField
                            type="password"
                            className={classnames("form-control form-control-lg" , {
                                "is-invalid": errors.password
                            })}
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            onChange={this.onChange}
                        />
                        {errors.password && (
                            <div className="invalid-feedback">{errors.password}</div>
                        )}
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Zapamiętaj mnie"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="secondary"
                        >
                            Zaloguj
                        </Button>
                        <Grid container>
                            <Grid item xs>
                                <a href="#" variant="body2">
                                    Zapomniałeś hasła?
                                </a>
                            </Grid>
                            <Grid item>
                                <a href="#" variant="body2">
                                    {"Nie posiadasz konta? Zarejestruj się!"}
                                </a>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        );
    }
}
Login.propTypes = {
    login: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security,
    errors: state.errors
});

export default connect(mapStateToProps,{login})(Login);