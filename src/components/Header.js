import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import styles from './styles';

class Header extends React.Component{
    render(){
        const {onClick,islight,pagesClick,nowpages}=this.props;
        return <nav style={styles.header}>
            <div>
                <ul style={styles.ul}>
                    <li style={styles.li}><a href="./index.html" style={styles.a} onClick={()=>pagesClick('Popular')}>Popular</a></li>
                    <li style={styles.li}><a href="#" style={styles.a} onClick={()=>pagesClick('Battle')}>Battle</a></li>
                </ul>
            </div>
            <div>
                <button style={styles.btn} onClick={onClick}>{islight ? '🔦' : '💡'}</button>
            </div>
        </nav>
    }
}
export default Header;