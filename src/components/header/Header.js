import React, {Component} from 'react';
import {connect} from "react-redux";
import PropTypes from "prop-types"
import SpecialistHeader from "./SpecialistHeader";
import GuestHeader from "./GuestHeader";

class Header extends Component {
    constructor(props){
        super(props)
    }

    static userAuthenticated(){
        return (<div>
                <SpecialistHeader/>
            </div>
        )
    }
    static userNotAuthenticated(){
        return (
            <GuestHeader/>
        )
    }

    render() {

        const {validToken, user} = this.props.security;

        const isAuth = (Header.userAuthenticated());
        const isNotAuth = (Header.userNotAuthenticated());

        let headerLinks;

        if(validToken && user){
            headerLinks = isAuth;
        }else{
            headerLinks = isNotAuth;
        }
        return (
            <div>
                {headerLinks}
            </div>
        );
    }
}

Header.propTypes = {
    logout: PropTypes.func.isRequired,
    security: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    security: state.security
});

export default connect(mapStateToProps)(Header);