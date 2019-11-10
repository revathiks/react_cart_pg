//import React ,{Component} from 'react';
//      import {connect} from 'react-redux';
const cartItemwithQuantity = (cartItems) => {
    return cartItems.reduce((acc,item)=>{
        const filterItem=acc.filter(item2 => item2.id===item.id)[0]
        filterItem!==undefined
        ?filterItem.quantity++
        :acc.push({...item,quantity:1,})
        return acc
    },[])

}
export default cartItemwithQuantity;