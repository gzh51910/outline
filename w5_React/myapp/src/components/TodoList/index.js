import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            checkAll:false,
            datalist: [
                {
                    id: Date.now(),
                    title: "年前实现<strong>月薪过万</strong>",
                    done: false,
                    selected: false
                },
                {
                    id: Date.now() + 10,
                    title: "明年变成高富帅，迎娶白富美",
                    done: false,
                    selected: false
                }
            ]
        }

        this.addItem = this.addItem.bind(this);
        this.completeItem = this.completeItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    // 添加
    addItem(title) {
        let data = {
            id: Date.now(),
            title: title,
            done: false,
            selected: false
        };

        this.setState({
            datalist: [data, ...this.state.datalist]
        })
    }

    //   删除
    removeItem(id,e) {
        let datalist = this.state.datalist.filter(item => item.id != id)
        this.setState({
            datalist
        })

        e.stopPropagation();
    }

    //   完成
    completeItem(id,e) {
        let datalist = this.state.datalist.map(item => {
            if (item.id === id) {
                item.done = true;
            }
            return item;
        });

        this.setState({
            datalist
        })

        e.stopPropagation();
    }

    //  选择
    selectItem(id,e) {
        console.log('id:', id)
        let { datalist } = this.state;
        if (typeof id === 'boolean') {
            datalist = datalist.map(item => {
                item.selected = id;
                return item;
            });
        } else {
            datalist = datalist.map(item => {
                if (item.id === id) {
                    item.selected = !item.selected;
                }
                return item;
            });
        }

        this.setState({
            datalist,
            checkAll:datalist.every(item=>item.selected)
        });
        
        e&&e.stopPropagation();
    }

    render() {
        return (
            <div>
                <TodoForm addItem={this.addItem} />
                <TodoContent
                    datalist={this.state.datalist}
                    removeItem={this.removeItem}
                    completeItem={this.completeItem}
                    selectItem={this.selectItem}
                    checkAll={this.state.checkAll}
                />
            </div>
        )
    }
}

export default TodoList;