import React from 'react';
// To be able to use HTML tags/elements in the .js file -> react module is required. And to import babel -> JS compiler // Supports modern js

import ReactDOM from 'react-dom';
// To use HTML DOM through REACT. Like document.getElementById()

import App from './App';

import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
// For Availing Bootstrap Styling and JavaScript to All Projects

// Since react version v16.x.x render method can return an array of elements as render([ element1,element2,element3 ]) rather then a single element containing other elements
// This is  equivalent to writing  <React.Fragment> <ele1></ele1><ele2></ele2><ele3></ele3> </React.Fragment> inside render() .<React.Fragment> is equivalent to <></>
ReactDOM.render(
  <App />
  , document.getElementById('root')
);

