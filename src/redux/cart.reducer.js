import {ADD_ITEM, TOGGLE_CART_HIDDEN, CLEAR_ITEM_FROM_CART, REMOVE_ITEM} from '../actions/action.type';
import {addItemToCart, removeItemFromCart} from '../Utils/cart.utils';

const INITITAL_STATE = {
  cartItems :[],
  hidden: true,
};

const cartReducer = (state = INITITAL_STATE, action) =>{

  switch(action.type){
    case ADD_ITEM:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        // cartItems : [...state.cartItems, action.payload],
      };
    case TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CLEAR_ITEM_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          cartItem => cartItem.id !== action.payload.id)
      }
    case REMOVE_ITEM: 
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      }
    default:
      return state;
  }
}

export default  cartReducer;