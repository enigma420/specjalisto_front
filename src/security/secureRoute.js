import {Redirect, Route} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types"

const securedRoute = ({ component: Component, security, ...otherProps}) => (
    <Route
        {...otherProps}
        render={props =>
        security.validToken === true ? (
            <Component {...props}/>
        ) : (
            <Redirect to="/login"/>
        )}

        />
);

securedRoute.propTypes = {
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(securedRoute);