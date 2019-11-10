import React from 'react'
export default function AddButton(props){
    return <button 
    onClick={() => props.addtoCart(props.product)}>
    AddtoCart
 ({(props.cartItem && props.cartItem.quantity) || 0})</button>
}