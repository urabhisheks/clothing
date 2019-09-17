import React from 'react';
import MenuItem from '../MenuItem/MenuItem';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectDirectorySections} from '../../redux/directory.selector';
import './Directory.scss';

const Directory =({sections}) => {

  return (
    <div className='directory-menu'>
      {
        sections.map(({title, imageUrl, id, size, linkUrl}) => (
          <MenuItem  title={title} imageUrl={imageUrl} key={id} size={size} linkUrl={linkUrl}/>
        ))
      }
    </div>
  )
}

const mapStateToProps = createStructuredSelector ({
  sections: selectDirectorySections
});

export default connect(mapStateToProps)(Directory);