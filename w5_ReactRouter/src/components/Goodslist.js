import React from 'react';
import {Row,Col} from 'antd';

function Goodslist({datalist,history}){
    function goto(goods_id){
        history.push(`/goods/${goods_id}`)
    }
    return (
        <Row gutter={30} style={{paddingRight:15}}>
            {
                datalist.map(goods=>{
                    return <Col
                    key={goods.goods_id} 
                    style={{minHeight:280}}
                    xs={12}
                    sm={6}
                    md={4}
                    onClick={goto.bind(this,goods.goods_id)}
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
    )
}

// withRouter = withRouter(Goodslist);

export default Goodslist;