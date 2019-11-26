import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";

import styles from './styles';

class Header extends React.Component{
    render(){
        const {onClick,islight}=this.props;
        return <nav style={styles.header}>
                <div>
                    <ul style={styles.ul}>
                        <li style={styles.li}><NavLink to="/Popular" className="aDefaule" activeClassName="aActive">Popular</NavLink></li>
                        <li style={styles.li}><NavLink to="/Battle" className="aDefaule" activeClassName="aActive">Battle</NavLink></li>
                    </ul>
                </div>
                <div>
                    <button style={styles.btn} onClick={onClick}>{islight ? '🔦' : '💡'}</button>
                </div>
            
        </nav>
    }
}
export default Header;