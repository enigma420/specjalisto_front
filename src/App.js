import React from 'react';
import './App.css';
import UnloggedHeader from "./components/UnloggedHeader";
import MainFooter from "./components/MainFooter";
import Content from "./components/Content";
import Register from "./components/Register";
import { BrowserRouter as Router,Route,Switch } from "react-router-dom";
import LoggedHeader from "./components/LoggedHeader";
import Map from "./components/Map";
import MainBanner from "./components/MainBanner";
import Login from "./components/Login";


function App() {

  return (
    <div className="App">
        <Router>
            <Route exact path="/" component={LoggedHeader}/>
            <Route exact path="/" component={MainBanner}/>
            <Route exact path="/" component={Map}/>
            <Route exact path="/" component={Content}/>
            <Route exact path="/" component={MainFooter}/>


            {/*<UnloggedHeader/>*/}
            {/*<Login/>*/}
            {/*<Register/>*/}
            {/*<LoggedHeader/>*/}
            {/*<MainBanner/>*/}
            {/*<Content/>*/}
            {/*<Map/>*/}
            {/*<MainFooter/>*/}
        </Router>

    </div>
  );
}

export default App;
