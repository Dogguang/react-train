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
    },
    BattleText:{
        textAlign:'center',
        fontWeight:300,
        margin:'10px',
        color:'inherit'
    },
    Battle:{
        marginTop:'100px',
        marginBottom:'100px'
    },
    BattleUl:{
        display:'flex',
        flexDirection: 'row',
        lexWrap:'warp',
        justifyContent:'space-around',
        textAlign:'center'
    },
    BattleLi:{
        listStyleType: 'none',
        width:'320px',
        height:'auto'
    },
    BattleCard:{
        height:'140px',
        background:'#d9d9d9'
        }
    
}
export default styles;