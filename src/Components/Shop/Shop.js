import React from 'react'
import {Route} from 'react-router-dom';
import Collections from '../Collections/Collections';
import Category from '../Category/Category';

const Shop =({match}) => {

  return (
    <div className='shop'>
      {/* <Collections /> */}
      <Route exact path={`${match.path}`} component = {Collections} />
      <Route path={`${match.path}/:categoryId`} component={Category}/>
    </div>
  );

}

export default Shop;