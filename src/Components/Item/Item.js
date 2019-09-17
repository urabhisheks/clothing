import React from 'react';
import {connect} from 'react-redux';
import {addItem} from '../../actions';
import Button from '../Button/Button';

import './Item.scss';

const Item = ({addItem, item}) => {
  const {id, name, price, imageUrl} = item;
  return(
    <div className='collection-item'>
      <div className='image' style={{backgroundImage: `url(${imageUrl})`}} /> 
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <Button onClick = {()=> addItem(item)} inverted>ADD to cart</Button>
    </div>
  )
}

export default connect(null, {addItem})(Item);