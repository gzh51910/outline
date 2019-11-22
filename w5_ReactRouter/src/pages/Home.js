import React,{Component} from 'react';

import {nsg} from '@/api';
import { Carousel } from 'antd';
import Goodslist from '@@/Goodslist';

class Home extends Component{
    state = {
        recommed:[]
    }
    async componentDidMount(){
        let {data} = await nsg.get({
            act:'index'
        });

        console.log(data);
        let recommed = data.datas[0].adv_list.item
        this.setState({
            recommed
        })
    }
    render(){
        let {recommed} = this.state;
        console.log('home',this.props);
        return (
            <div>
               <Carousel autoplay>
                    {
                        recommed.map(item=><img key={item.data} src={item.image}/>)
                    }
                    {
                        recommed.map(item=><img key={item.data} src={item.image}/>)
                    }
                </Carousel>

                <Goodslist data={}/>
            </div>
        )
    }
}

export default Home;