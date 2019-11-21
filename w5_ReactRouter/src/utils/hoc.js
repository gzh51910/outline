import React,{Component} from 'react'

export function withToken(InnerComponent){
    // 高阶组件必须返回一个组件
    class OuterComponent extends Component{
        constructor(props){
            super(props);
            this.state = {
                Authorization:''
            }
        }
        componentDidMount(){
            let Authorization = localStorage.getItem('Token');
            this.setState({
                Authorization
            })
        }
        render(){
            // return <InnerComponent Authorization={this.state.Authorization}/>
            return <InnerComponent {...this.props} {...this.state}/>
        }
    }

    return OuterComponent;
}

