import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import styles from './styles';

//正在加载
class Loading extends React.Component {
    render(){
        return (<div style={styles.center}>
            正在加载
            <i class="fa fa-spinner fa-pulse fa-lg fa-fw"></i>
            <span class="sr-only">Loading...</span>
        </div>);
    }
} 
export default Loading;