import React from 'react';

import TodoItem from './TodoItem';

function TodoContent({datalist,removeItem,completeItem,selectItem}){
    // 函数组件的第一个参数props为父组件传入的属性组成的对象
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox"/></th>
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
export default TodoContent;