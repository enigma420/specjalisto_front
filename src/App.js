import React from 'react';
import './App.css';
import Register from "./components/forms/registration/SpecialistRegisterForm";
import RegisterC from "./components/forms/registration/CustomerRegisterForm";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import Map from "./components/map/Map";
import MainBanner from "./components/MainBanner";
import Profile from "./components/profile/Profile";
import Specialists from "./components/Specialists";
import Commissions from "./components/Commissions";
import CustomerRegisterForm from "./components/forms/registration/CustomerRegisterForm";
import CommissionForm from "./components/forms/commission/CommissionForm";
import Search from "./components/Search";
import Header from "./components/header/Header";
import UserHeader from "./components/header/UserHeader";
import StaticFooter from "./components/footer/StaticFooter";
import SpecialistHeader from "./components/header/SpecialistHeader";
import CustomerHeader from "./components/header/CustomerHeader";


function App() {

  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={SpecialistHeader}/>

            {/*<Route exact path="/" component={MainBanner}/>*/}
            <Route exact path="/" component={Profile}/>
            {/*<Route exact path="/" component={Register}/>*/}
            {/*<Route exact path="/" component={Map}/>*/}
            <Route exact path="/" component={StaticFooter}/>

            {/*<Register/>*/}
            {/*<MainBanner/>*/}
            {/*<Content/>*/}
            {/*<Map/>*/}
            {/*<MainFooter/>*/}
        </Router>

    </div>
  );
}

export default App;
