"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var styles = {
  center: {
    textAlign: 'center'
  },
  light: {
    minHeight: '100%'
  },
  dark: {
    color: '#ffffff',
    minHeight: '100%',
    background: '#262626'
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  ul: {
    display: 'flex',
    justifyContent: 'center',
    padding: 0
  },
  li: {
    listStyleType: 'none',
    marginRight: '10px'
  },
  a: {
    textDecoration: 'none',
    color: 'inherit',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  btn: {
    border: 'none',
    background: 'transparent',
    fontSize: '30px'
  },
  cardLight: {
    display: 'block',
    width: "250px",
    padding: "20px",
    borderRadius: '8px',
    marginTop: '10px',
    marginBottom: '10px',
    background: '#d9d9d9'
  },
  cardDark: {
    display: 'block',
    width: "250px",
    padding: "20px",
    borderRadius: '8px',
    marginTop: '10px',
    marginBottom: '10px',
    background: '#595959'
  },
  cardImg: {
    marginBottom: '8px',
    width: '150px',
    height: '150px',
    borderRadius: '5px',
    margin: '0 auto',
    display: 'block'
  },
  content: {
    display: 'flex',
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
}; //正在加载

var Loading =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Loading, _React$Component);

  function Loading() {
    _classCallCheck(this, Loading);

    return _possibleConstructorReturn(this, _getPrototypeOf(Loading).apply(this, arguments));
  }

  _createClass(Loading, [{
    key: "render",
    value: function render() {
      return React.createElement("div", {
        style: styles.center
      }, "\u6B63\u5728\u52A0\u8F7D...");
    }
  }]);

  return Loading;
}(React.Component); //夜间模式
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


var Header =
/*#__PURE__*/
function (_React$Component2) {
  _inherits(Header, _React$Component2);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClick = _this$props.onClick,
          islight = _this$props.islight;
      return React.createElement("nav", {
        style: styles.header
      }, React.createElement("div", null, React.createElement("ul", {
        style: styles.ul
      }, React.createElement("li", {
        style: styles.li
      }, React.createElement("a", {
        href: "./index.html",
        style: styles.a
      }, "Popular")), React.createElement("li", {
        style: styles.li
      }, React.createElement("a", {
        href: "#",
        style: styles.a
      }, "Battle")))), React.createElement("div", null, React.createElement("button", {
        style: styles.btn,
        onClick: onClick
      }, islight ? '🔦' : '💡')));
    }
  }]);

  return Header;
}(React.Component); //内容导航栏


var Menu =
/*#__PURE__*/
function (_React$Component3) {
  _inherits(Menu, _React$Component3);

  function Menu() {
    _classCallCheck(this, Menu);

    return _possibleConstructorReturn(this, _getPrototypeOf(Menu).apply(this, arguments));
  }

  _createClass(Menu, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          _onClick = _this$props2.onClick,
          current = _this$props2.current;
      var links = [{
        title: 'All',
        query: 'stars:>1'
      }, {
        title: 'JavaScript',
        query: 'stars:>1+language:javascript'
      }, {
        title: 'Ruby',
        query: 'stars:>1+language:ruby'
      }, {
        title: 'Java',
        query: 'stars:>1+language:java'
      }, {
        title: 'CSS',
        query: 'stars:>1+language:css'
      }];
      var link = links.map(function (item, key) {
        return React.createElement("li", {
          style: styles.li,
          key: key
        }, React.createElement("a", {
          onClick: function onClick() {
            return _onClick(item.query);
          },
          style: current == item.query ? {
            'color': 'red'
          } : {
            'color': 'inherit'
          }
        }, item.title));
      });
      return React.createElement("ul", {
        style: styles.ul
      }, link);
    }
  }]);

  return Menu;
}(React.Component); //列表里面的卡片


var Card =
/*#__PURE__*/
function (_React$Component4) {
  _inherits(Card, _React$Component4);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, _getPrototypeOf(Card).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          index = _this$props3.index,
          source = _this$props3.source,
          islight = _this$props3.islight;

      if (!source) {
        return React.createElement("div", null, "\u6CA1\u6709\u5361\u7247");
      }

      return React.createElement("div", {
        style: islight ? styles.cardLight : styles.cardDark
      }, React.createElement("h2", {
        style: styles.center
      }, "#", index), React.createElement("div", {
        style: styles.center
      }, React.createElement("img", {
        src: source.owner.avatar_url,
        alt: source.name,
        style: styles.cardImg
      })), React.createElement("h4", {
        style: styles.cardTitle
      }, React.createElement("a", {
        href: source.html_url,
        target: "_blank",
        style: styles.a
      }, source.owner.login)), React.createElement("div", null, React.createElement("i", {
        "class": "fa fa-user",
        style: _objectSpread({}, styles.icon, {
          color: 'rgb(255, 191, 116)'
        })
      }), React.createElement("a", {
        href: source.owner.html_url,
        target: "_blank",
        style: styles.a
      }, source.name)), React.createElement("div", null, React.createElement("i", {
        "class": "fa fa-star",
        style: _objectSpread({}, styles.icon, {
          color: 'rgb(255, 215, 0)'
        })
      }), source.stargazers_count, " stars"), React.createElement("div", null, React.createElement("i", {
        "class": "fa fa-code-fork",
        style: _objectSpread({}, styles.icon, {
          color: 'rgb(129, 195, 245)'
        })
      }), source.forks, " forks"), React.createElement("div", null, React.createElement("i", {
        "class": "fa fa-warning",
        style: _objectSpread({}, styles.icon, {
          color: 'rgb(241, 138, 147)'
        })
      }), source.open_issues, " Open issues"));
    }
  }]);

  return Card;
}(React.Component); //网页内容


var Content =
/*#__PURE__*/
function (_React$Component5) {
  _inherits(Content, _React$Component5);

  function Content(props) {
    var _this;

    _classCallCheck(this, Content);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Content).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (query) {
      console.log('query', query);

      _this.setState({
        query: query
      });
    });

    _this.state = {
      query: 'stars:>1'
    };
    return _this;
  }

  _createClass(Content, [{
    key: "render",
    value: function render() {
      var query = this.state.query;
      var islight = this.props.islight;
      return React.createElement("div", null, React.createElement(Menu, {
        onClick: this.onClick,
        current: query
      }), React.createElement(ContentList, {
        query: query,
        islight: islight
      }));
    }
  }]);

  return Content;
}(React.Component); //网页内容的列表


var ContentList =
/*#__PURE__*/
function (_React$Component6) {
  _inherits(ContentList, _React$Component6);

  function ContentList(props) {
    var _this2;

    _classCallCheck(this, ContentList);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(ContentList).call(this, props));

    _defineProperty(_assertThisInitialized(_this2), "search", function _callee() {
      var query, url, res;
      return regeneratorRuntime.async(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              query = _this2.props.query;
              url = "https://api.github.com/search/repositories?q=".concat(query, "&sort=stars&order=desc&type=Repositories");
              console.log('url', url);

              _this2.setState({
                loading: true
              });

              _context.prev = 4;
              _context.next = 7;
              return regeneratorRuntime.awrap(axios.get(url));

            case 7:
              res = _context.sent;
              console.log('res', res.data);

              _this2.setState({
                items: res.data.items
              });

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](4);
              console.log('error', _context.t0);

            case 15:
              _this2.setState({
                loading: false
              });

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, [[4, 12]]);
    });

    _this2.state = {
      loading: false,
      items: []
    };
    return _this2;
  }

  _createClass(ContentList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.search();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.query != prevProps.query) {
        this.search();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          items = _this$state.items,
          loading = _this$state.loading;
      var islight = this.props.islight;
      var cards = items.map(function (item, key) {
        return React.createElement(Card, {
          key: key,
          source: item,
          index: key + 1,
          islight: islight
        });
      });
      return React.createElement("div", {
        style: styles.content
      }, loading ? React.createElement(Loading, null) : cards);
    }
  }]);

  return ContentList;
}(React.Component); //尾部


var Footer =
/*#__PURE__*/
function (_React$Component7) {
  _inherits(Footer, _React$Component7);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, _getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: "render",
    value: function render() {
      var islight = this.props.islight;
      return React.createElement("div", {
        style: islight ? styles.footerLight : styles.footerDark
      }, "\u7248\u6743\u6240\u6709\xA9Dogguang");
    }
  }]);

  return Footer;
}(React.Component); //App


var App =
/*#__PURE__*/
function (_React$Component8) {
  _inherits(App, _React$Component8);

  function App(props) {
    var _this3;

    _classCallCheck(this, App);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this, props));

    _defineProperty(_assertThisInitialized(_this3), "lightClick", function () {
      _this3.setState(function (state) {
        return {
          islight: !state.islight
        };
      });
    });

    _this3.state = {
      islight: true
    };
    return _this3;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      var islight = this.state.islight;
      return React.createElement("div", {
        style: islight ? styles.light : styles.dark
      }, React.createElement("div", {
        style: styles.container
      }, React.createElement(Header, {
        onClick: this.lightClick,
        islight: islight
      }), React.createElement(Content, {
        islight: islight
      }), React.createElement(Footer, {
        islight: islight
      })));
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('app'));