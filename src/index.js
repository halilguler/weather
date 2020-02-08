import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import Login from './components/Login/Login';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router,Route} from "react-router-dom";
import history from './history';


ReactDOM.render(
    <Router history={history}>
        <div>
            <Route exact path="/" component={Login}>
            </Route>
            <Route path="/weather" component={App}> 
            </Route>
        </div>
    </Router>

, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
