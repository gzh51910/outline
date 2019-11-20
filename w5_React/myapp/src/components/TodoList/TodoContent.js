import React,{Component} from 'react';

import TodoItem from './TodoItem';

class TodoContent extends Component{
    constructor(props){
        super(props);// 继承
        this.state = {
            checkAll:props.datalist.every(item=>item.selected)
        }

        // this.checkedAllChange = this.checkedAllChange.bind(this);
    }

    // state = {
    //     checkAll:false
    // }

    // componentDidUpdate(nextProps, currentState){
        // console.log(this.props.datalist[0].selected, nextProps.datalist[0].selected)
        // 使用componentDidUpdate要注意死循环
        // if()
        // this.setState({
        //     checkAll:this.props.datalist.every(item=>item.selected)
        // })
    // }

    // checkedAllChange(){
    //     let {selectItem} = this.props;

    //     // 调用setState不会立即修改state，而是进入到一个队列中(异步)
    //     this.setState({
    //         checkAll:!this.state.checkAll
    //     },()=>{
    //         console.log('callback.checkAll:',this.state.checkAll)
    //         selectItem(this.state.checkAll)
    //     });
    //     console.log('checkAll:',this.state.checkAll)
    // }

    render(){
        // let {checkAll} = this.state;
        let {datalist,removeItem,completeItem,selectItem,checkAll} = this.props;
        // 函数组件的第一个参数props为父组件传入的属性组成的对象
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>
                                <input 
                                type="checkbox" 
                                checked={checkAll} 
                                onChange={selectItem.bind(null,!checkAll)}
                                />
                            </th>
                            <th>#</th>
                            <th>事件</th>
                            <th>是否完成</th>
                            <th>操作</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datalist.map((item,idx)=>{
                            return <TodoItem 
                            key={item.id} 
                            item={item} 
                            idx={idx}
                            // removeItem={removeItem}
                            // completeItem={completeItem}
                            // selectItem={selectItem}
                            {...{removeItem,completeItem,selectItem}}
                            />
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TodoContent;