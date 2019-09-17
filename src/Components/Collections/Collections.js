import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCollectionsForPreview} from '../../redux/shop.selector';
import Preview from '../Preview/Preview';
import './Collections.scss';

const Collections =({collections}) => {

  return (
    <div className='collections'>
    {
      collections.map(({id, ...otherProps}) => (
        <Preview key={id}  {...otherProps} />
      ))
    }
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(Collections);