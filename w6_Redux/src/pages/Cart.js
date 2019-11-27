import React,{Component} from 'react';
import {Row,Col,List,Divider,Tooltip,Button,Icon,InputNumber,Steps  } from 'antd';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CartAction from '../store/action/cart'

// 映射属性（获取）
const mapStateToProps = (state)=>{
    let {goodslist} = state.cart;
    let totalPrice = goodslist.reduce((prev,item)=>prev+item.goods_price*item.goods_qty,0)
    return {
        goodslist,
        totalPrice
    }
}

// 映射方法（修改操作）
const mapDispatchToProps = (dispatch)=>{
    return {
        clear(){
            dispatch({type:'CLEAR_CART'})
        },
        changeQty(goods_id,goods_qty){
            dispatch({type:'CHANGE_GOODS_QTY',payload:{goods_id,goods_qty}})
        },
        remove(goods_id){
            dispatch({type:'REMOVE_FROM_CART',payload:{goods_id}})
        },
        dispatch
    }
    // return bindActionCreators(CartAction,dispatch)
}
@connect(mapStateToProps,mapDispatchToProps) // 两个参数可选，其中mapDispatchToProps默认已经映射dispatch到组件的props
class Cart extends Component{
    // state = {
    //     goodslist: []
    // }
    // changeQty = (goods_id,goods_qty)=>{
    //     let {dispatch} = this.props;
    //     dispatch({type:'change_goods_qty',payload:{goods_id,goods_qty}})
    // }
    render(){
        let {goodslist,totalPrice,dispatch,clear,changeQty,remove} = this.props;
        console.log(this.props)
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
                                    <Icon type="close" style={{color:'#f00'}} onClick={remove.bind(this,item.goods_id)}/>
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
                                    onChange={changeQty.bind(this,item.goods_id)}
                                     />
                                </div>}
                            />
                        </List.Item>
                    )}
                />
                <Divider />
                <Row>
                    <Col span={8}>
                        <Button type="danger" icon="delete" onClick={clear}>清空购物车</Button>
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