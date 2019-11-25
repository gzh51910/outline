import React,{Component} from 'react';
import {nsg} from '@/api'
import {Tabs} from 'antd';
import {Route} from 'react-router-dom';
import List from './List';

class Discover extends Component{
    state = {
        menu:[],
        activeKey:''
    }
    async componentDidMount(){
        let {datas} = await nsg.get({
            act:'goods_class'
        });
        console.log('datas:',datas)
        let activeKey = datas.class_list[0].gc_id
        this.setState({
            menu:datas.class_list,
            activeKey
        });

        // 请求第一个tab对应的数据
        this.changeType(activeKey);
    }
    changeType = (activeKey)=>{
        let {history,match} = this.props;
        console.log(activeKey);
        history.push(match.url+"/"+activeKey)
    }
    render(){
        let {menu,activeKey} = this.state;
        let {match} = this.props;
        return (
            <div>
                <Tabs 
                defaultActiveKey={activeKey} 
                tabPosition='top'
                onChange={this.changeType}
                >
                    {menu.map((item,idx) => (
                        <Tabs.TabPane tab={item.gc_name} key={item.gc_id}>
                            
                            {/* {
                                tabData[item.gc_id] ? 
                                <Tabs 
                                    tabPosition='left'
                                    style={{height:500}}
                                >
                                    {
                                    tabData[item.gc_id].map(it=>(
                                            <Tabs.TabPane tab={it.gc_name} key={it.gc_id}>
                                                <img src={it.gc_image}/>
                                            </Tabs.TabPane>
                                        ))
                                    }
                                </Tabs>
                                :
                                '无数据'
                            } */}
                            <Route path={match.path+"/:gc_id"} component={List} />
                        </Tabs.TabPane>
                    ))}
                </Tabs>
            </div>
        )
    }
}

export default Discover;