import React,{Component} from 'react';

import {Route,Redirect,Switch,Link,NavLink,withRouter} from 'react-router-dom';

// import Home from './pages/Home';
// import Discover from './pages/List';
// import Cart from './pages/Cart';
// import Reg from './pages/Reg';
// import Login from './pages/Login';
// import Mine from './pages/Mine';
// import Goods from './pages/Goods';
import Home from '~/Home';
import Discover from '~/List';
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
import {Menu, Icon} from 'antd';

class App extends Component{
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

<<<<<<< HEAD
    // 添加原型方法
=======
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
    goto(path){
        let {history} = this.props;
       console.log(this.props);

       history.push(path)
    } */

<<<<<<< HEAD
    // 添加实例属性/方法
    state = {
        currentPath:'/home',
=======
    state = {
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
        menu:[
            {
                name:'home',
                path:'/home',
<<<<<<< HEAD
                icon:'home',
=======
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
                text:'首页'
            },{
                name:'discover',
                path:'/discover',
<<<<<<< HEAD
                icon:'compass',
=======
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
                text:'发现'
            },
            {
                name:'cart',
                path:'/cart',
<<<<<<< HEAD
                icon:'shopping-cart',
=======
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
                text:'购物车'
            },{
                name:'mine',
                path:'/mine',
<<<<<<< HEAD
                icon:'user',
=======
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
                text:'我的'
            },
        ]
    }
<<<<<<< HEAD
    goto = ({key:path})=>{
        let {history} = this.props;
        this.setState({
            currentPath:path
        })
       history.push(path)
    }
    componentDidMount(){
        // console.log('props',this.props)
        this.setState({
            currentPath:this.props.location.pathname
        })
    }
=======
    goto = (path)=>{
        let {history} = this.props;
       console.log(this.props);

       history.push(path)
    }
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
    render(){
        console.log(this)
        return (
            <div>
<<<<<<< HEAD
                {/* <ul>
                {
                    this.state.menu.map(item=>{
                        return <li key={item.name} onClick={this.goto.bind(this,item.path)}>
                            <NavLink 
                            to={item.path}
                            activeStyle={{color:'#f00',fontWeight:'bold'}}
                            replace
                            >{item.text}</NavLink>
=======
                <ul>
                {
                    this.state.menu.map(item=>{
                        return <li key={item.name} onClick={this.goto.bind(this,item.path)}>
                            {/* <NavLink 
                            to={item.path}
                            activeStyle={{color:'#f00',fontWeight:'bold'}}
                            replace
                            >{item.text}</NavLink> */}
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
                            {item.text}
                        </li>
                    })
                }
<<<<<<< HEAD
                </ul> */}

                <Menu 
                onClick={this.goto} 
                selectedKeys={[this.state.currentPath]} 
                mode="horizontal"
                theme="dark"
                >
                {
                    this.state.menu.map(item=>{
                        return <Menu.Item key={item.path}>
                            <Icon type={item.icon} />
                            {item.text}
                        </Menu.Item>
                    })
                }
                </Menu>
=======
                </ul>
                
>>>>>>> 78d95a06972ddb0fe3166f5b04c71d9b0418414b
                    <Switch>
                        {/* <Route path="/" component={Home} exact/> */}
                        <Route path="/home" component={Home}/>
                        <Route path="/discover" component={Discover}/>
                        <Route path="/cart" component={Cart}/>
                        <Route path="/reg" component={Reg}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/mine" component={Mine}/>
                        <Route path="/goods/:id" component={Goods}/>
                        <Route path="/notfound" render={()=><div>404页面</div>}/>
                        <Redirect from="/" to="/home" exact/>
                        <Redirect to="/notfound"/>
                    </Switch>
            </div>
        )
    }
}

App = withRouter(App);
export default App;