import React,{Component} from 'react';
import {nsg} from '@/api'
import {Tabs} from 'antd';
import Goodslist from '@@/Goodslist'
class List extends Component{
    state = {
        menu:[],
        activeKey:'',
        datalist:[]
    }
    async componentDidMount(){console.log('List:',this.props)
        // 接收传入的id
        let {gc_id} = this.props.match.params;

        let {datas} = await nsg.get({
            act:'goods_class',
            op:'get_child_all',
            gc_id
        })

        this.setState({
            menu:datas.class_list[0].child
        });

        // 获取第一个Tab的数据
        this.changeType(datas.class_list[0].child[0].gc_id)
    }
    changeType = (activeKey)=>{
        console.log(activeKey)

        this.getData(activeKey);
    }
    getData = async (gc_id)=>{
        let {datas} = await nsg.get({
            act:'goods',
            op:'goods_list',
            gc_id,
            page:10,
            curpage:1
        })
        
        this.setState({
            datalist:datas.goods_list
        })
    }
    render(){
        let {menu,activeKey,datalist} = this.state;
        return (
            <div>
                <Tabs 
                defaultActiveKey={activeKey} 
                tabPosition='left'
                onChange={this.changeType}
                >
                    {menu.map((item,idx) => (
                        <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                            
                           {/*  当前tab的数据*/}
                            <Goodslist datalist={datalist} {...this.props}/>
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}

export default List;