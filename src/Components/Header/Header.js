import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {auth} from '../../firebase/firebase.utils';
import {selectCartHidden} from '../../redux/cart.selector';
import {selectCurrentUser} from '../../redux/user.selector';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import CartIcon from '../Cart-Icon/Cart-Icon';
import Cart from '../Cart/Cart';
import './Header.scss';

const Header = ({currentUser, hidden}) => {

  return(
    <div  className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo' />
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          Shop
        </Link>
        <Link className='option' to='/contact'>
          Contact
        </Link>
        {
          currentUser ?
            (<div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>)
            : (<Link className='option' to='/signin'>SIGN IN</Link>)
        }
        <CartIcon />
      </div>
      { !hidden && <Cart />}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);