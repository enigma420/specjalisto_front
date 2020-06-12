import axios from "axios";
import React from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import setJwtToken from "./security/setJwtToken";
import {SET_CURRENT_USER} from "./actions/types";
import Provider from "react-redux/es/components/Provider";
import GuestHeader from "./components/header/GuestHeader";
import StaticFooter from "./components/footer/StaticFooter";
import Search from "./components/landing/Search";
import store from "./store"
import {logout} from "./actions/securityActions";
import jwt_decode from "jwt-decode";
import LandingMap from "./components/map/LandingMap";
import MainBanner from "./components/landing/MainBanner";
import CustomerRegisterForm from "./components/forms/registration/CustomerRegisterForm";
import SpecialistRegisterForm from "./components/forms/registration/SpecialistRegisterForm";
import Login from "./components/forms/login/Login";
import Profile from "./components/profile/Profile";
import SpecialistHeader from "./components/header/SpecialistHeader";
import UserHead from "./components/header/Header";
import CreateCommissionButton from "./components/commission/CreateCommissionButton";
import CommissionDashboard from "./components/commission/CommissionList";
import CreateCommission from "./components/forms/commission/CreateCommission";
import EditCommission from "./components/forms/commission/EditCommission";
import CreateOpinion from "./components/forms/opinion/CreateOpinion";
import SearchCommissions from "./search/commission/SearchCommissions";
import Commissions from "./search/commission/Commissions";
import Specialists from "./search/specialist/Specialists";

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
    <Router>
        <div>
            {
                //Public Routes
            }
            <UserHead/>
            <Route exact path="/customer_register" component={CustomerRegisterForm}/>
            <Route exact path="/specialist_register" component={SpecialistRegisterForm}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/" component={MainBanner}/>
            <Route exact path="/" component={LandingMap}/>
            {
                //Private Routes
            }
            <Switch>
                <Route exact path="/createCommission" component={CreateCommission}/>
                <Route exact path="/createOpinion" component={CreateOpinion}/>
                <Route exact path="/editCommission/:commissionId" component={EditCommission}/>
                <Route exact path="/commissionDashboard" component={CommissionDashboard}/>
                <Route exact path="/searchCommissions" component={Commissions}/>
                <Route exact path="/searchSpecialists" component={Specialists}/>
                <Route exact path="/profile" component={Profile}/>
            </Switch>

            <StaticFooter/>
        </div>
        {/*<Route exact path="/" component={Profile}/>*/}
    </Router>

</Provider>


    </div>
  );
}

export default App;
