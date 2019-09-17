import React from 'react';
// import Collections from '../Collections/Collections';
import Item from '../Item/Item';
import {connect} from 'react-redux';
import {selectCategory} from '../../redux/shop.selector';
import './Category.scss';

const Category =({collection}) => {
  const {title, items} = collection;
  return(
    <div className='category'>
      <h2 className='title'> {title}</h2>
      <div className='items'>
        {
          items.map(item => <Item key={item.id} item={item}/>)
        }
      </div>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collection : selectCategory(ownProps.match.params.categoryId)(state)
});

export default connect(mapStateToProps)(Category);