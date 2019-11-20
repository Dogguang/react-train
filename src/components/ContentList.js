import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import 'normalize.css/normalize.css';
import InfiniteScroll from 'react-infinite-scroller';

import styles from './styles';
import Card from './Card';
import Loading from './Loading';



class ContentList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            items: []
        };
    }
    componentDidMount() {
        this.search();
    }
    componentDidUpdate (prevProps) {
        if (this.props.query != prevProps.query) {
            this.search();
        }
    }
    search = async () => {
        const {query} = this.props;
        const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`;
        console.log('url', url);
        this.setState({ loading: true })
        try {
            const res = await axios.get(url)
            console.log('res', res.data)
            this.setState({
                items: res.data.items
            })
        } catch (e) {
            console.log('error', e)
        }
        this.setState({ loading: false });
    }
    render(){
        const { items, loading } = this.state;
        const {islight}=this.props
        const cards = items.map((item, key) =>
            <Card key={key} source={item} index={key + 1} islight={islight}></Card>
        );
        return (<div style={styles.content}>
            {loading ?<Loading></Loading> : cards}
        </div>); 
    }
}

export default ContentList;