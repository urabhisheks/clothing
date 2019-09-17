import * as actions from './action.type';

export const addItem = item => ({
  type: actions.ADD_ITEM,
  payload: item,
});

export const setCurrentUser = (user) => ({
  type: actions.SET_CURRENT_USER,
  payload: user,
});

export const toggleCartHidden = () => ({
  type: actions.TOGGLE_CART_HIDDEN,
});

export const clearItemFromCart = (item) => ({
  type: actions.CLEAR_ITEM_FROM_CART,
  payload: item,
});

export const removeItem = (item) => ({
  type: actions.REMOVE_ITEM,
  payload: item,
});