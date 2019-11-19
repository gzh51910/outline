import React, { Component } from 'react';

import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

class TodoList extends Component {
    constructor() {
        super();
        this.state = {
            test: ['laoxie', 'dingding', 'yueyue', 'luoluo'],
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
            datalist:[data,...this.state.datalist]
        })
    }

    //   删除
    removeItem(id) {
        let datalist = this.state.datalist.filter(item=>item.id!=id)
        this.setState({
            datalist
        })
    }

    //   完成
    completeItem(id) {
        let datalist = this.state.datalist.map(item => {
            if (item.id === id) {
                item.done = true;
            }
            return item;
        });

        this.setState({
            datalist
        })
    }

    //  选择
    selectItem(id) {
        let datalist = this.state.datalist.map(item => {
            if (item.id === id) {
                item.selected = !item.selected;
            }
        });

        this.setState({
            datalist
        })
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
                 />
            </div>
        )
    }
}

export default TodoList;