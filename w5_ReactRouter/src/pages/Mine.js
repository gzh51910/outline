import React,{Component} from 'react';
import {withToken} from '../utils/hoc';

@withToken
class Mine extends Component{
    constructor(){
        super()
        this.state = {
            token:''
        }
    }
    // componentDidMount(){
    //     let token = localStorage.getItem('Token');
    //     this.setState({
    //         token
    //     })
    // }
    render(){
        console.log('Mine.props',this.props)
        return (
            <div>
                Mine ({this.state.token})
            </div>
        )
    }
}

// Mine = withToken(Mine)

export default Mine;