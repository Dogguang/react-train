import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import styles from './styles';

class Card extends React.Component{
    render() {
        const {index,source,islight}=this.props;
        if(!source){
            return <div>没有卡片</div>;
        }
        return (
            <div style={islight ? styles.cardLight : styles.cardDark}>
                <h2 style={styles.center}>#{index}</h2>
                <div style={styles.center}>
                    <img src={source.owner.avatar_url} alt={source.name} style={styles.cardImg} />
                </div>
                <h4 style={styles.cardTitle}><a href={source.html_url} target="_blank" style={styles.aDefaule}>
                    {source.owner.login}
                </a></h4>
                <div>
                    <i className="fa fa-user" style={{ ...styles.icon, color: 'rgb(255, 191, 116)' }}></i><a href={source.owner.html_url} target="_blank" style={styles.aDefaule}>
                        {source.name}
                    </a>
                </div>
                <div>
                    <i className="fa fa-star" style={{ ...styles.icon, color: 'rgb(255, 215, 0)' }}></i>{source.stargazers_count} stars
        </div>
                <div>
                    <i className="fa fa-code-fork" style={{ ...styles.icon, color: 'rgb(129, 195, 245)' }}></i>{source.forks} forks
        </div>
                <div>
                    <i className="fa fa-warning" style={{ ...styles.icon, color: 'rgb(241, 138, 147)' }}></i>{source.open_issues} Open issues
        </div>
            </div>
        );
    }
}

export default Card;