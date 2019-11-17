
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

const styles={
    center:{
        textAlign:'center'
    },
    light:{
        minHeight:'100%'
    },
    dark:{
        color:'#ffffff',
        minHeight:'100%',
        background:'#262626'
    },
    container:{
        maxWidth:'1200px',
        margin:'0 auto'
    },
    header:{
        display:'flex',
        justifyContent: 'space-between'
    },
    ul:{
        display:'flex',
        justifyContent: 'center',
        padding:0
    },
    li:{
        listStyleType: 'none',
        marginRight: '10px'
    },
    a:{
        textDecoration:'none',
        color:'inherit',
        fontSize:'18px',
        fontWeight: 'bold'
    },
    btn:{
        border:'none',
        background:'transparent',
        fontSize:'30px'
    },
    cardLight:{
        display:'block',
        width:"250px",
        padding:"20px",
        borderRadius: '8px',
        marginTop: '10px',
        marginBottom: '10px',
        background:'#d9d9d9'
    },
    cardDark:{
        display:'block',
        width:"250px",
        padding:"20px",
        borderRadius: '8px',
        marginTop: '10px',
        marginBottom: '10px',
        background:'#595959'
    },
    cardImg:{
        marginBottom: '8px',
        width: '150px',
        height: '150px',
        borderRadius: '5px',
        margin: '0 auto',
        display: 'block'
    },
    content:{
        display:'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    footerLight: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
        backgroundColor: '#d9d9d9',
        borderRadius: '8px'
    },
    footerDark: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: '48px',
        backgroundColor: '#595959',
        borderRadius: '8px'
    },
    icon: {
        display: 'inline-flex',
        width: '16px',
        justifyContent: 'center'
    },
    cardTitle: {
        display: 'flex',
        flexDirection: 'row',
        height: '36px',
        justifyContent: 'center'
    }
    
}
//正在加载
class Loading extends React.Component {
    render(){
        return <div style={styles.center}>
            正在加载...
            </div>
    }
} 

//夜间模式
// class Nav extends React.Component{
//     render(){
//         const {onClick,islight}=this.props;
//         return <nav style={styles.header}>
//             <div><ul style={styles.ul}>
//                 <li style={styles.li}><a href="#" style={styles.a}>Popular</a></li>
//                 <li style={styles.li}><a href="./Battle.html" style={styles.a}>Battle</a></li>
//             </ul></div>
//             <button style={styles.btn} onClick={onClick}>{islight ? '🔦' : '💡'}</button>
//         </nav>   
//     }
// }

//头部
// class Header extends React.Component {
//     render(){
//         const {onClick,islight}=this.props;
//         return <div>
//             <Nav onClick={onClick} islight={islight}></Nav>
//         </div>
//     }
// }

class Header extends React.Component{
    render(){
        const {onClick,islight}=this.props;
        return <nav style={styles.header}>
            <div>
                <ul style={styles.ul}>
                    <li style={styles.li}><a href="./index.html" style={styles.a}>Popular</a></li>
                    <li style={styles.li}><a href="#" style={styles.a}>Battle</a></li>
                </ul>
            </div>
            <div>
                <button style={styles.btn} onClick={onClick}>{islight ? '🔦' : '💡'}</button>
            </div>
        </nav>
    }
}

//内容导航栏
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

//列表里面的卡片
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
                <h4 style={styles.cardTitle}><a href={source.html_url} target="_blank" style={styles.a}>
                    {source.owner.login}
                </a></h4>
                <div>
                    <i class="fa fa-user" style={{ ...styles.icon, color: 'rgb(255, 191, 116)' }}></i><a href={source.owner.html_url} target="_blank" style={styles.a}>
                        {source.name}
                    </a>
                </div>
                <div>
                    <i class="fa fa-star" style={{ ...styles.icon, color: 'rgb(255, 215, 0)' }}></i>{source.stargazers_count} stars
        </div>
                <div>
                    <i class="fa fa-code-fork" style={{ ...styles.icon, color: 'rgb(129, 195, 245)' }}></i>{source.forks} forks
        </div>
                <div>
                    <i class="fa fa-warning" style={{ ...styles.icon, color: 'rgb(241, 138, 147)' }}></i>{source.open_issues} Open issues
        </div>
            </div>
        );
    }
}

//网页内容
class Content extends React.Component {
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

//网页内容的列表
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
        return <div style={styles.content}>
            {loading ?<Loading></Loading> : cards}
        </div>
    }
}

//尾部
class Footer extends React.Component {
    render(){
        const {islight}=this.props;
        return <div style={islight ? styles.footerLight : styles.footerDark}> 
            版权所有©Dogguang
            </div>
    }
}

//App
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state={islight:true};
    }
    lightClick=()=>{
        this.setState(state =>({
            islight:!state.islight
        }));
    }
    render(){
        const {islight}=this.state;
        return <div style={islight ? styles.light : styles.dark}>
            <div style={styles.container}>
                <Header onClick={this.lightClick} islight={islight}></Header>
                <Content islight={islight}></Content>
                <Footer islight={islight}></Footer>
            </div>
        </div>
       
    }
}
ReactDOM.render(
    <App/>,
    document.getElementById('app')
);