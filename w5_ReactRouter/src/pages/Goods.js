import React, { Component } from 'react';
let querystring = require('querystring')
import {Icon,Button,Row,Col} from 'antd';
import {nsg} from '@/api'
import './Goods.scss';

let Styles = {
    mt:{
        marginTop:20
    },
    pd:{
        padding:15
    }
}

class Goods extends Component {
    state = {
        data: {},
        commedList:[]
    }
    getData = async (goods_id) => {
        let { data:{datas} } = await nsg.get({
            act: 'goods',
            op: 'goods_detail',
            goods_id,
            key: ''
        });
        console.log(datas)
        let { goods_image, goods_info,goods_commend_list} = datas;
        this.setState({
            data: {
                ...goods_info,
                goods_image
            },
            commedList:goods_commend_list
        })
    }
    goto = (id)=>{
        this.props.history.push(`/goods/${id}`);
    }
    componentDidMount() {
        // 获取动态路由id
        // console.log(querystring.parse(this.props.location.search.slice(1)));
        let { id } = this.props.match.params;

        this.getData(id);
    }

    // 当state或props修改时触发
    componentDidUpdate(prevProps){

        if(prevProps.match.params.id != this.props.match.params.id){
            this.getData(this.props.match.params.id)
        }
    }
    render() {
        let {data,commedList} = this.state;
        return (
            <div>
                <div className="img-container">
                    <img src={data.goods_image} />
                    <Icon type="heart" style={{ fontSize: 30, color: '#f00' }} />
                </div>
                <div style={Styles.pd}>
                    <h1>{data.goods_name}</h1>
                    <p className="price">
                        <del>{data.goods_price}</del>
                        <span>{(data.goods_promotion_price*0.8).toFixed(2)}</span>
                    </p>
                    <Button.Group>
                        <Button icon="shopping-cart" size="large">添加到购物车</Button>
                        <Button icon="shopping" type="danger" size="large">立即购买</Button>
                    </Button.Group>
                </div>
                {/* 推荐列表 */}
                <div style={Styles.pd}>
                    <h4 style={Styles.mt}>推荐列表</h4>
                    <Row gutter={30}>
                    {
                        commedList.map(goods=>{
                            return <Col
                            key={goods.goods_id} 
                            style={{minHeight:280}}
                            xs={12}
                            sm={6}
                            md={4}
                            onClick={this.goto.bind(this,goods.goods_id)}
                            >
                                <img src={goods.goods_image_url} style={{width:'100%'}}/>
                                <h5>{goods.goods_name}</h5>
                                <p className="price">
                                    <del>{goods.goods_promotion_price}</del>
                                    <span>{(goods.goods_promotion_price*0.8).toFixed(2)}</span>
                                </p>
                            </Col>
                        })
                    }
                </Row>
                </div>
            </div>
        )
    }
}

export default Goods;