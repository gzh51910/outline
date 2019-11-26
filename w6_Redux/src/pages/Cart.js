import React,{Component} from 'react';
import {Row,Col,List,Divider,Tooltip,Button,Icon,InputNumber,Steps  } from 'antd';

class Cart extends Component{
    state = {
        goodslist: [{
            goods_id: "1",
            goods_name: "huawei mate30 pro",
            goods_image:
                "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3089410232,3830777459&fm=11&gp=0.jpg",
            goods_price: 5998,
            goods_qty: 10
        },
        {
            goods_id: "2",
            goods_name: "xiaomi9",
            goods_image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571131475&di=2df2d3a54a89db9e09952799acb25261&imgtype=jpg&er=1&src=http%3A%2F%2Fi0.hdslb.com%2Fbfs%2Farticle%2F8488db95efa140b9c50cb4615e2ca337a6981aa7.jpg",
            goods_price: 2999,
            goods_qty: 2
        },
        {
            goods_id: "3",
            goods_name: "onePlus9 pro",
            goods_image:
                "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1570536784660&di=d4471f6edf73cace7d98fb05869a9277&imgtype=0&src=http%3A%2F%2Fimg13.360buyimg.com%2Fn1%2Fs450x450_jfs%2Ft28117%2F273%2F1288839750%2F66834%2F8ef15c40%2F5cdd22b8Nbc711aba.jpg",
            goods_price: 3999,
            goods_qty: 1
        }]
    }
    changeQty = ()=>{

    }
    render(){
        let {goodslist} = this.state;
        let totalPrice = goodslist.reduce((prev,item)=>prev+item.goods_price*item.goods_qty,0)
        return (
            <div style={{padding:15}}>
                <Steps size="small" current={1}>
                    <Steps.Step title="购物车" description="shopping cart" />
                    <Steps.Step title="结算"  description="gei qian" />
                    <Steps.Step title="购物成功" description="shopping success" />
                </Steps>
                <Divider/>
                <List
                    itemLayout="horizontal"
                    dataSource={goodslist}
                    renderItem={item => (
                        <List.Item
                            actions={[
                                <Tooltip title="删除商品">
                                    <Icon type="close" style={{color:'#f00'}}/>
                                </Tooltip>]}
                            >
                            <List.Item.Meta
                                avatar={<img src={item.goods_image} style={{width:100}} />}
                                title={item.goods_name}
                                description={<div className="price">
                                    <span>{item.goods_price}</span> 
                                     &times; 
                                    <InputNumber 
                                    size="small" 
                                    min={1} 
                                    max={10} 
                                    value={item.goods_qty} 
                                    onChange={this.changeQty.bind(this,item.id)}
                                     />
                                </div>}
                            />
                        </List.Item>
                    )}
                />
                <Divider />
                <Row>
                    <Col span={8}>
                        <Button type="danger" icon="delete">清空购物车</Button>
                    </Col>
                    <Col span={16} style={{textAlign:'right'}}>
                    总价：<span className="price" style={{marginRight:20}}><span>{totalPrice.toFixed(2)}</span></span><Button type="primary" size="large">结算</Button>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Cart;