import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import styles from './styles';

class Footer extends React.Component {
    render(){
        const {islight}=this.props;
        return <div style={islight ? styles.footerLight : styles.footerDark}> 
            版权所有©Dogguang
            </div>
    }
}
export default Footer;