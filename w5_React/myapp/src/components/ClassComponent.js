
import React from 'react';

// 函数组件
// function TodoList(){
//     return (
//         <div>
//             TodoList
//         </div>
//     )
// }

// React的类组件，必须继承自React.Component
// 类组件必须包含render方法，render方法必须有返回值
class TodoList extends React.Component{
    // 构造器
    constructor(){
        // 必须调用super()，调用后才可在组件中使用this
        super();

        // 定义组件的状态
        this.state = {
            name:'待办事项',
            qty:10
        }

        // 在初始化时改变this指向（推荐）
        this.changeQty = this.changeQty.bind(this);
    }
    // 自定义函数，在此处定义的所有方法为"原型方法"
    // 默认没有this指向
    changeQty(){
        console.log(666,this)
        // 修改组件状态（数据）
        // this.state.qty++ // 错误写法
        this.setState({
            qty:this.state.qty+1
        })
    }

    // 目前浏览器还不支持这种写法，但是可以使用babel工具对它进行支持
    // CRA已经对这种写法进行了支持
    // changeQty = ()=>{
    //     this.setState({
    //         qty:this.state.qty+1
    //     })
    // }
    render(){
        console.log('todoList:',this)
        return (
            <div>
                TodoList {this.state.name}
                <button onClick={this.changeQty}>{this.state.qty}</button>
            </div>
        )
    }
}

export default TodoList;