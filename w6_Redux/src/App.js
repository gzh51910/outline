import React, { Component } from 'react';

import { Route, Redirect, Switch, Link, NavLink, withRouter } from 'react-router-dom';
import './App.scss';

// import Home from './pages/Home';
// import Discover from './pages/List';
// import Cart from './pages/Cart';
// import Reg from './pages/Reg';
// import Login from './pages/Login';
// import Mine from './pages/Mine';
// import Goods from './pages/Goods';
import Home from '~/Home';
import Discover from '~/Discover';
import Cart from '~/Cart';
import Reg from '~/Reg';
import Login from '~/Login';
import Mine from '~/Mine';
import Goods from '~/Goods';


// 完整引入
// import {Menu, Icon} from 'antd';
// import 'antd/dist/antd.css';

// 按需引入
// import Menu from 'antd/es/menu'; // 加载 JS
// import 'antd/es/Menu/style/css'; // 加载 CSS
// import Icon from 'antd/es/icon'; // 加载 JS
// import 'antd/es/icon/style/css'; // 加载 CSS

// 基于babel-plugin-import的按需加载
import { Menu, Icon,Badge } from 'antd';

// import store from './store';
import {connect} from 'react-redux';

class App extends Component {
    /* constructor(props){
        super(props)

        this.state = {
            menu:[
                {
                    name:'home',
                    path:'/home',
                    text:'首页'
                },{
                    name:'discover',
                    path:'/discover',
                    text:'发现'
                },
                {
                    name:'cart',
                    path:'/cart',
                    text:'购物车'
                },{
                    name:'mine',
                    path:'/mine',
                    text:'我的'
                },
            ]
        }

        this.goto = this.goto.bind(this);
    }

    // 添加原型方法
    goto(path){
        let {history} = this.props;
       console.log(this.props);

       history.push(path)
    } */

    // 添加实例属性/方法
    state = {
        currentPath: '/home',
        // cartLen:0,
        menu: [
            {
                name: 'home',
                path: '/home',
                icon: 'home',
                text: '首页'
            }, {
                name: 'discover',
                path: '/discover',
                icon: 'compass',
                text: '发现'
            },
            {
                name: 'cart',
                path: '/cart',
                icon: 'shopping-cart',
                text: '购物车'
            }, {
                name: 'mine',
                path: '/mine',
                icon: 'user',
                text: '我的'
            },
        ]
    }
    goto = ({ key: path }) => {
        let { history } = this.props;
        this.setState({
            currentPath: path
        })
        history.push(path)
    }
    componentDidMount() {
        // console.log('props',this.props)
        

        // 获取store数据并监听修改（手动：太麻烦 -> react-redux）
        // let cartLen = store.getState().goodslist.length
        // store.subscribe(()=>{
        //     cartLen = store.getState().goodslist.length;

        //     this.setState({
        //         cartLen,
        //     })
        // })
        
        this.setState({
            // cartLen,
            currentPath: this.props.location.pathname
        })
    }
    render() {
        let {cartLen} = this.props;
        console.log('App.props:',this.props)
        return (
            <div>
                {/* <ul>
                {
                    this.state.menu.map(item=>{
                        return <li key={item.name} onClick={this.goto.bind(this,item.path)}>
                            <NavLink 
                            to={item.path}
                            activeStyle={{color:'#f00',fontWeight:'bold'}}
                            replace
                            >{item.text}</NavLink>
                <ul>
                {
                    this.state.menu.map(item=>{
                        return <li key={item.name} onClick={this.goto.bind(this,item.path)}>
                            <NavLink 
                            to={item.path}
                            activeStyle={{color:'#f00',fontWeight:'bold'}}
                            replace
                            >{item.text}</NavLink> }
                            {item.text}
                        </li>
                    })
                }
                </ul> */}

                <Menu
                    onClick={this.goto}
                    selectedKeys={[this.state.currentPath]}
                    mode="horizontal"
                    theme="dark"
                >
                    {
                        this.state.menu.map(item => {
                            return <Menu.Item key={item.path}>
                                {
                                    item.name==='cart' ? 
                                    <Badge count={cartLen}>
                                        <Icon type={item.icon} />
                                        {item.text}
                                    </Badge>
                                    :
                                    <>
                                        <Icon type={item.icon} />
                                        {item.text}
                                    </>
                                }
                            </Menu.Item>
                        })
                    }
                </Menu>

                <Switch>
                    {/* <Route path="/" component={Home} exact/> */}
                    <Route path="/home" component={Home} />
                    <Route path="/discover" component={Discover} />
                    <Route path="/cart" component={Cart} />
                    <Route path="/reg" component={Reg} />
                    <Route path="/login" component={Login} />
                    <Route path="/mine" component={Mine} />
                    <Route path="/goods/:id" component={Goods} />
                    <Route path="/notfound" render={() => <div>404页面</div>} />
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/notfound" />
                </Switch>
            </div>
        )
    }
}

const mapStateToProps = function(state){
    // 映射state数据到App组件的props
    console.log('state:',state)
    return {
        cartLen:state.goodslist.length
    };
}

App = connect(mapStateToProps)(App);
App = withRouter(App);
export default App;