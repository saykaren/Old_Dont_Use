import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import NavigationBar from './nav';
import HeroSection from './heroSection';
import ServiceSection from './serviceSection';
import ReferenceSection from './reference';
import ContactMe from './contact';

ReactDOM.render(
  <div id="bodyContents">
    <NavigationBar />
    <HeroSection />
    <ServiceSection />
    <ReferenceSection />
    <ContactMe />
  </div>, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
