/**
 * 定义用于创建action的方法
 */
export const ADD_TO_CART = 'ADD_TO_CART';
export const CHANGE_GOODS_QTY = 'CHANGE_GOODS_QTY';
export const CLEAR_CART = 'CLEAR_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

 function add(goods){
     return {
         type:ADD_TO_CART,
         payload:goods
     }
 }

 function changeQty(goods_id,goods_qty){
    return {
        type:CHANGE_GOODS_QTY,
        payload:{goods_id,goods_qty}
    }
 }

function clear(){
    return {
        type:CLEAR_CART
    }
 }

function remove(goods_id){
    return {
        type:REMOVE_FROM_CART,
        payload:{goods_id}
    }
 }

 export default {
    add,
    changeQty,
    clear,
    remove
 }