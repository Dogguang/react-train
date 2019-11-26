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
            //是否加载更多
            hasMore: true,
            //当前加载页数
            pageNum:1,
            //最多加载页数
            pageEnd:3,
            //存放请求到的数据
            items: []
        };
    }
    componentDidMount() {
        this.search();
    }
    //组件props和state更新时调用
    componentDidUpdate (prevProps) {
        if (this.props.query != prevProps.query) {
            //有改变，即切换了分类
            this.setState({
                //把之前分类加载的内容清空，当前页重置为第一页，设置继续加载为true
                items:[],
                pageNum:1,
                hasMore:true
            });
        }
    }
    //请求函数
    search = async () => {
        const {query} = this.props;
        const {pageNum,pageEnd,items}=this.state;
        //如果当前页已经是最后一页或超出，设置加载更多为false，不再继续加载
        if(pageNum>pageEnd){
            this.setState({
                hasMore:false
            });
            return ;
        }
        //不是最后一页就继续请求数据加载
        const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&type=Repositories`;
        console.log('url', url);
        try {
            const res = await axios.get(url)
            console.log('res', res.data)
            //concat是数组拼接函数，把这次请求到的数据加到之前加载的数据数组里
            this.setState({
                items: items.concat(res.data.items)
            })
        } catch (e) {
            console.log('error', e)
        }
        //当前页+1
        this.setState({ pageNum: pageNum+1, });
    }
    render(){
        const {hasMore,items}=this.state;
        const {islight}=this.props;
        const cards = items.map((item, key) =>
            <Card key={key} source={item} index={key + 1} islight={islight}></Card>
        );
        return (
            <InfiniteScroll
                pageStart={0}
                loadMore={() => this.search()}
                hasMore={hasMore}
                loader={<div className="loader" key={0}><Loading></Loading></div>}
            >
                <div style={styles.content}>
                    {cards}
                </div>
            </InfiniteScroll>
        ); 
    }
}

export default ContentList;