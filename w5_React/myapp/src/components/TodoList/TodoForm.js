import React,{Component} from 'react';

class TodoForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            keyword:''
        }

        this.changeKeyWord = this.changeKeyWord.bind(this);
        this.add = this.add.bind(this);
    }
    changeKeyWord(e){
        this.setState({
            keyword:e.target.value
        })
    }
    add(){
        this.props.addItem(this.state.keyword)
        this.setState({
            keyword:""
        });
        this.keyword.focus();
    }
    render(){
        return (
            <div>
                <input 
                type="text" 
                value={this.state.keyword} 
                onChange={this.changeKeyWord}
                ref={ele=>this.keyword = ele}
                />
                <button onClick={this.add}>添加</button>
            </div>
        )
    }
}

export default TodoForm;