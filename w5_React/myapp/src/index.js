import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// let res = React.createElement('div',{id:'container'},'text');
// let res2 = <div id="container">text</div>
// console.log('res:',res,res2)

// let username = 'laoxie';
// let myStyle = {color:'#f00',fontSize:20}

// 渲染方法render(content,target)
ReactDOM.render(
    // <div>Hello, World</div>
    // React.createElement('div',null,'Hello World')
    // <div id="container" class="home"><h1>Hello, World</h1><ul><li>data1</li><li>data2</li></ul></div>
    // React.createElement(
    //     'div',
    //     {id:'container',className:'home'},
    //     [
    //         React.createElement('h1',null,'Hello World'),
    //         React.createElement('ul',null,[
    //             React.createElement('li',null,'data1'),
    //             React.createElement('li',null,'data2'),
    //             React.createElement('li',null,'data3')
    //         ])
    //     ]
    // )

    // JSX写法
    // <div id="container" className="home">
    //     {
    //         //<h1>Hello, {<strong>{username}</strong>}</h1>
    //     }
    //     <ul>
    //         <li>data1</li>
    //         <li>data2</li>
    //     </ul>
    //     <label htmlFor="username" style={myStyle}>用户名：</label>
    //     <input id="username" autoFocus onKeyDown={()=>{console.log('keydown')}} />
    //     <img/>
    // </div>
    <App/>
    , document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
