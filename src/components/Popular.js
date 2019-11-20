import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import 'font-awesome/css/font-awesome.min.css';

import Menu from '@/components/Menu';
import ContentList from '@/components/ContentList';

class Popular extends React.Component {
    constructor(props) {
        super(props)
        this.state = { query: 'stars:>1' };
    }
    onClick=(query)=>{
        console.log('query', query)
        this.setState({
            query
        })
    }
    render(){
        const {query}=this.state;
        const {islight}=this.props;
        return(
            <div>
                <Menu onClick={this.onClick} current={query}></Menu>
                <ContentList query={query} islight={islight}></ContentList>
            </div>
        )
    }
}

export default Popular;
