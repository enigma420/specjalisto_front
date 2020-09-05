import axios from "axios";
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import setJwtToken from "./security/setJwtToken";
import {SET_CURRENT_USER} from "./actions/types";
import Provider from "react-redux/es/components/Provider";
import UserHeader from "./components/header/UserHeader";
import StaticFooter from "./components/footer/StaticFooter";
import Dashboard from "./components/Dashboard";
import Search from "./components/Search";
import store from "./store"
import {logout} from "./actions/securityActions";
import jwt_decode from "jwt-decode";
import Map from "./components/map/Map";
import MainBanner from "./components/MainBanner";
import LoginForm from "./components/forms/login/LoginForm";
import CustomerRegisterForm from "./components/forms/registration/CustomerRegisterForm";
import SpecialistRegisterForm from "./components/forms/registration/SpecialistRegisterForm";
import CommissionsForm, {AddCommission} from "./components/forms/commission/AddCommission";
import CommissionForm from "./components/forms/commission/CommissionForm";

const jwtToken = localStorage.jwtToken;

//JWT

if(jwtToken) {
    setJwtToken(jwtToken);
    const decoded_jwtToken = jwt_decode(jwtToken);
    store.dispatch({
        type: SET_CURRENT_USER,
        payload: decoded_jwtToken
    });


    const currentTime = Date.now() / 1000;
    if (decoded_jwtToken.exp < currentTime) {
        store.dispatch(logout());
        window.location.href = "/";
    }
}
function App() {

  return (
    <div className="App">
<Provider store={store}>
{/*    <Router>*/}
{/*        <div>*/}

{/*            {*/}
{/*                //Public Routes*/}
{/*            }*/}


{/*            {*/}
{/*                //Private Routes*/}
{/*            }*/}

{/*            <Switch>*/}
{/*                <Route exact path="/"/>*/}


{/*            </Switch>*/}

{/*        </div>*/}
{/*    </Router>*/}
    <UserHeader/>
    {/*<Route exact path="/" component={MainBanner}/>*/}
    {/*<Route exact path="/" component={Map}/>*/}
    {/*<Route exact path="/login" component={LoginForm}/>*/}
    {/*<Route exact path="/customer_register" component={CustomerRegisterForm} />*/}
    < CommissionForm/>
    <StaticFooter/>
</Provider>


    </div>
  );
}

export default App;
