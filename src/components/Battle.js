import React from 'react';
import ReactDOM from 'react-dom';

import styles from '@/components/styles';

class Battle extends React.Component{
    render() {
        return (
            <div>
                <div style={styles.Battle}>
                    <h1 style={styles.BattleText}>Instructions</h1>
                    <ul style={styles.BattleUl}>
                        <li style={styles.BattleLi}><h3 style={styles.BattleText}>Enter two Github users</h3><div style={styles.BattleCard}></div></li>
                        <li style={styles.BattleLi}><h3 style={styles.BattleText}>Battle</h3><div><i class="fa fa-fighter-jet fa-5x" aria-hidden="true"></i></div></li>
                        <li style={styles.BattleLi}><h3 style={styles.BattleText}>See the winner</h3><div style={styles.BattleCard}><i class="fa fa-trophy fa-fw" aria-hidden="true"></i></div></li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Battle;