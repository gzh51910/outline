import React from 'react';
import MyContext from './MyContext'
// 逐层传递
// function TodoItem({idx,item,removeItem,completeItem,selectItem}){
//     return (
//         <tr onClick={selectItem.bind(null,item.id)}>
//             <td><input type="checkbox" checked={item.selected} onChange={selectItem.bind(null,item.id)}/></td>
//             <td>{idx+1}</td>
//             <td>{item.title}</td>
//             <td>{item.done ? '是' : '否'}</td>
//             <td>
//                 <button onClick={completeItem.bind(this,item.id)}>完成</button>
//                 <button onClick={removeItem.bind(this,item.id)}>删除</button>
//             </td>
//         </tr>
//     )
// }

// Context共享
// 函数组件
function TodoItem({idx,item}){
    return (
        <MyContext.Consumer>
            {
                (value)=>{
                    console.log('value',value);
                    let {selectItem,completeItem,removeItem} = value;
                    return <tr onClick={selectItem.bind(null,item.id)}>
                        <td><input type="checkbox" checked={item.selected} onChange={selectItem.bind(null,item.id)}/></td>
                        <td>{idx+1}</td>
                        <td>{item.title}</td>
                        <td>{item.done ? '是' : '否'}</td>
                        <td>
                            <button onClick={completeItem.bind(this,item.id)}>完成</button>
                            <button onClick={removeItem.bind(this,item.id)}>删除</button>
                        </td>
                    </tr>
                }
            }
        
        </MyContext.Consumer>
    )
}

// 类组件
// class TodoItem extends React.Component{
//     render(){
//         let {item,idx} = this.props;
//         let {selectItem,completeItem,removeItem} = this.context;
//         return (
//             <tr onClick={selectItem.bind(null,item.id)}>
//                 <td><input type="checkbox" checked={item.selected} onChange={selectItem.bind(null,item.id)}/></td>
//                 <td>{idx+1}</td>
//                 <td>{item.title}</td>
//                 <td>{item.done ? '是' : '否'}</td>
//                 <td>
//                     <button onClick={completeItem.bind(this,item.id)}>完成</button>
//                     <button onClick={removeItem.bind(this,item.id)}>删除</button>
//                 </td>
//             </tr>
//         )
//     }
// }
// TodoItem.contextType = MyContext;
export default TodoItem;