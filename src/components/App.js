import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import styles from './styles';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Popular from './Popular';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={islight:true};
    }
    lightClick=()=>{
        this.setState(state =>({
            islight:!state.islight
        }));
    }
    render(){
        const {islight}=this.state;
        return <div style={islight ? styles.light : styles.dark}>
            <div style={styles.container}>
                <Router>
                    <Header onClick={this.lightClick} islight={islight}></Header>
                    <Content islight={islight}></Content>
                </Router>
                <Footer islight={islight}></Footer>
            </div>
        </div>
       
    }
}
export default hot(App);