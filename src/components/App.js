import {hot} from 'react-hot-loader/root';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import styles from './styles';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import Popular from './Popular';

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={islight:true,nowpages:'Popular'};
    }
    lightClick=()=>{
        this.setState(state =>({
            islight:!state.islight
        }));
    }
    pagesClick=(pages)=>{
        this.setState({nowpages:pages});
    }
    render(){
        const {islight,nowpages}=this.state;
        return <div style={islight ? styles.light : styles.dark}>
            <div style={styles.container}>
                <Header onClick={this.lightClick} islight={islight}  pagesClick={this.pagesClick} nowpages={nowpages}></Header>
                <Content islight={islight} nowpages={nowpages}></Content>
                <Footer islight={islight}></Footer>
            </div>
        </div>
       
    }
}
export default hot(App);