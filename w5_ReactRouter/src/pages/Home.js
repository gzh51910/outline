import React,{Component} from 'react';
import {nsg} from '@/api';
import { Carousel,Row,Col } from 'antd';
import Goodslist from '@@/Goodslist';

class Home extends Component{
    state = {
        recommed:[],
        datalist:[]
    }
    goto = (id)=>{
        // this.props.history.push({
        //     pathname:`/goods/${id}`,
        //     search:'username=lx&psw=1234',
        //     state:{a:100,b:200}
        // })
        this.props.history.push(`/goods/${id}`)
    }

    async componentDidMount(){
        let {datas} = await nsg.get({
            act:'index'
        });
        // 轮播图数据
        let recommed = datas[0].adv_list.item;

        // 格式化数据
        // [{title,item},{}]
        let datalist = datas.slice(1).map(item=>item.goods);
        console.log('datalist:',datalist)

        this.setState({
            recommed,
            datalist
        })
    }
    
    render(){
        let {recommed,datalist} = this.state;
        console.log('home',this.props);
        return (
            <div>
               <Carousel autoplay>
                    {
                        recommed.map(item=><img key={item.data} src={item.image}/>)
                    }
                </Carousel>

                <div style={{padding:10}}>
                {
                    datalist.map(item=>{
                        return <div key={item.title}>
                            <h4>{item.title}</h4>
                            <Row gutter={30}>
                                {
                                    item.item.map(goods=>{
                                        return <Col
                                        key={goods.goods_id} 
                                        style={{minHeight:280}}
                                        xs={12}
                                        sm={6}
                                        md={4}
                                        onClick={this.goto.bind(this,goods.goods_id)}
                                        >
                                            <img src={goods.goods_image} style={{width:'100%'}}/>
                                            <h5>{goods.goods_name}</h5>
                                            <p className="price">
                                                <del>{goods.goods_price}</del>
                                                <span>{goods.goods_promotion_price}</span>
                                            </p>
                                        </Col>
                                    })
                                }
                            </Row>
                        </div>
                    })
                }
                </div>

            </div>
        )
    }
}

export default Home;