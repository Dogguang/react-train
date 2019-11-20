import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import styles from './styles';

class Menu extends React.Component{
    render() {
        const {onClick,current}=this.props;
        const links = [
            {
                title: 'All',
                query: 'stars:>1'
            },
            {
                title: 'JavaScript',
                query: 'stars:>1+language:javascript'
            },
            {
                title: 'Ruby',
                query: 'stars:>1+language:ruby'
            },
            {
                title: 'Java',
                query: 'stars:>1+language:java'
            },
            {
                title: 'CSS',
                query: 'stars:>1+language:css'
            }
        ];
        const link = links.map((item, key) =>
            <li style={styles.li} key={key}><a onClick={() => onClick(item.query)} style={current == item.query ? {'color':'red'} : {'color':'inherit'}}>{item.title}</a></li>
        );
        return (
            <ul style={styles.ul}>
                {link}
            </ul>
        );
    }
}

export default Menu;