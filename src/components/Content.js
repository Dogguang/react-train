import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";

import Popular from './Popular';
import Battle from './Battle';

class Content extends React.Component {
    render(){
        const {islight}=this.props;
        return (
                <Switch>
                    <Route exact path="/">
                        <Redirect from="/" to="/Popular"></Redirect>
                    </Route>
                    <Route exact path="/Popular">
                        <Popular islight={islight}></Popular>
                    </Route>
                    <Route exact path="/Battle">
                        <Battle islight={islight}></Battle>
                    </Route>
                </Switch>
        );
    }
}

export default Content;