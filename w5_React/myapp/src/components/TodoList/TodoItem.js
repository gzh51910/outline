import React from 'react';

function TodoItem({idx,item,removeItem,completeItem,selectItem}){
    return (
        <tr>
            <td><input type="checkbox"/></td>
            <td>{idx+1}</td>
            <td>{item.title}</td>
            <td>{item.done ? '是' : '否'}</td>
            <td>
                <button onClick={completeItem.bind(this,item.id)}>完成</button>
                <button onClick={removeItem.bind(this,item.id)}>删除</button>
            </td>
        </tr>
    )
}
export default TodoItem;