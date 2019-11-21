import React,{Component} from 'react';

import {Route,Redirect,Switch,Link,NavLink,withRouter} from 'react-router-dom';

import Home from './pages/Home';
import Discover from './pages/List';
import Cart from './pages/Cart';
import Reg from './pages/Reg';
import Login from './pages/Login';
import Mine from './pages/Mine';
import Goods from './pages/Goods';

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

    goto(path){
        let {history} = this.props;
       console.log(this.props);

       history.push(path)
    } */

    state = {
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
    goto = (path)=>{
        let {history} = this.props;
       console.log(this.props);

       history.push(path)
    }
    render(){
        return (
            <div>
                <ul>
                {
                    this.state.menu.map(item=>{
                        return <li key={item.name} onClick={this.goto.bind(this,item.path)}>
                            {/* <NavLink 
                            to={item.path}
                            activeStyle={{color:'#f00',fontWeight:'bold'}}
                            replace
                            >{item.text}</NavLink> */}
                            {item.text}
                        </li>
                    })
                }
                </ul>
                
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