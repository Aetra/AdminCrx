import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '.././node_modules/bootstrap/dist/css/bootstrap.css';
import {Router} from "react-router-dom";
import {history} from './app/helpers';


// setup fake backend
import { configureFakeBackend } from './app/helpers';
configureFakeBackend();


ReactDOM.render(

    <Router history={history}>
      <App />
    </Router>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
