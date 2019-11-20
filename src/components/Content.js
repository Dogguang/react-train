import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import Popular from './Popular';
import Battle from './Battle';

class Content extends React.Component {
    render(){
        const {islight,nowpages}=this.props;
        return (
            <div>
                {nowpages=='Popular' ? <Popular islight={islight}></Popular> : <Battle></Battle>}
            </div>
        );
    }
}

export default Content;