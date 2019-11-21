import React from 'react';

class Life extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            qty:10
        }
        this.changeQty = this.changeQty.bind(this);
        console.log('constructor:')
    }
    componentWillMount(){
        console.log('componentWillMount:')
    }
    componentDidMount(){
        console.log('componentDidMount:')
    }
    componentWillUpdate(nextProps, nextState){
        // nextState: 将要更新的值
        // this.state: 当前值
        console.log('componentWillUpdate',nextState,this.state)
    }
    componentDidUpdate(prevProps, prevState){
        console.log('componentDidUpdate',prevState,this.state)
        // 判断值有修改后才发起ajax
        if(prevProps.username != this.props.username){
            // 发起Ajax请求

            //  在此修改state要慎重，避免死循环
        }
    }

    // 特殊生命周期函数
    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps',nextProps)
    }

    // 一般用于性能优化
    shouldComponentUpdate(nextProps, nextState){
        console.log('shouldComponentUpdate',nextProps, nextState);
        // 必须显性返回true/false，如果不写该生命周函数，默认为 return true

        if(nextProps.age === this.props.age){
            return false;
        }
        return true
    }

    // 给原型对象添加方法
    changeQty(){
        this.setState({
            qty:this.state.qty+1
        })
    }

    // 给实例添加方法
    // changeQty2 = ()=>{
    //     // this
    // }
    render(){
        console.log('render:',this)
        return <div>
            <h1>生命周期函数演示</h1>
            <button onClick={this.changeQty}>{this.state.qty}</button>
        </div>
    }
}

export default Life;