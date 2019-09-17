import React from 'react';
import {connect} from 'react-redux'
import {addItem ,clearItemFromCart, removeItem} from '../../actions';
import './CheckoutItem.scss';

const CheckoutItem = ({cartItem, addItem ,clearItemFromCart, removeItem}) => {
  const {name, imageUrl, price, quantity} = cartItem;
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img alt='key' src={imageUrl}/>
      </div>
      <span className='name'> {name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={()=> removeItem(cartItem)} >&#10094;</div>
        <span className='value'>{quantity}</span>
        <div className='arrow' onClick={()=> addItem(cartItem)} >&#10095;</div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={()=> clearItemFromCart(cartItem)} >&#10005;</div>

    </div>
  );
}

export default connect(null, {addItem ,clearItemFromCart, removeItem})(CheckoutItem);