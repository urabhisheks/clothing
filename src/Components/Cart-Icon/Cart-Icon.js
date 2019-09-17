import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {toggleCartHidden} from '../../actions';
import {selectCartItemsCount} from '../../redux/cart.selector';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';
import './cart-icon.scss';

const CartIcon = ({itemCount, toggleCartHidden}) => {

  return(
    <div className='cart-icon' onClick={toggleCartHidden}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  // itemCount: cartItems.reduce((quantity, cartItem) => quantity+ cartItem.quantity, 0)
  itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, {toggleCartHidden})(CartIcon);