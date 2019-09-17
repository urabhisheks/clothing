import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import Button from '../Button/Button';
import CartItem from './CartItem';
import {selectCartItems} from '../../redux/cart.selector';
import {toggleCartHidden} from '../../actions';
import './Cart.scss';


const Cart = ({cartItems, history, toggleCartHidden}) => {
  // console.log('props ', otherProps);
  return (
    <div className='cart'>
      <div className='cart-items'>
        {
          cartItems.length ?
          (cartItems.map(cartItem => <CartItem key ={cartItem.id} item={cartItem} />))
          : (<span className='empty-message'>Your cart is empty</span>)
        }
      </div>
      <Button 
        onClick={()=> {
          history.push('/checkout');
          toggleCartHidden();
        }}>Go To Checkout</Button>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps, {toggleCartHidden})(Cart));