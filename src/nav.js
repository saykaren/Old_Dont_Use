import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HeroSection from './heroSection';
import ServiceSection from './serviceSection';
import ContactMe from './contact';
import Credentials from './credentials';
import FAQ from './FAQ';
import Home from './home';
// import IQtestingPage from './IQtestingpage.js';
// import {Link} from "react-router";

function NavigationBar(){
  return(
    
      <Router> 
          <div>
            <nav className={"navBar"}>
              <div className={"navLink"}>
                <Link to="/Home">Home</Link>
              </div>
              <div className={"navLink"}> 
                <Link to={"/Services"}>Services</Link>
              </div>
              <div className={"navLink"}> 
              <Link to={"/credentials"}>Credentials</Link>
              </div>
              <div className={"navLink"}>
                <Link to={"/Schedule"}>Schedule Testing</Link>
              </div>
              <div className={"navLink"}>
                <Link to={"/FAQ"}>FAQ</Link>
              </div>
              <div className={"navLink"}>
                <Link to={"/contact"}>Contact Me</Link>
              </div>
            </nav>
          
            <Route exact strict path={"/"} component={Home}/>
            <Route path={"/Home"} component={Home}/>
            <Route path={"/credentials"} component={Credentials}/>
            <Route path={"/Services"} component={ServiceSection}/>
            <Route path={"/schedule"} component={HeroSection}/>
            <Route path={'/FAQ'} component={FAQ}/>
            <Route path={'/contact'} component={ContactMe} />
              
          </div>
      </Router>
  
      
  );
};


export default NavigationBar