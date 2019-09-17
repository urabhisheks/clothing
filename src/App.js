import React, {Component} from 'react';
import HomePage from './Components/HomePage/HomePage';
import {createStructuredSelector} from 'reselect';
import {Route, Switch, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Shop from './Components/Shop/Shop';
import Checkout from './Components/Checkout/Checkout';
import {setCurrentUser} from './actions/index';
import Header from './Components/Header/Header';
import Authentication from './Components/Authentication/Authentication';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {selectCurrentUser} from './redux/user.selector';
import './App.css';

class App extends Component {
  
  state = {
    currentUser: null,
  }

  unsubscribeFromAuth = null;

  componentDidMount (){
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth=> {
      // console.log('user ', user);
      // this.setState({currentUser: user});
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          // console.log('snapshot ', snapShot.data());
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data(),
          //   }
          // });
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          })
        });
        // console.log(' state ', this.state);
      } else {
      // this.setState({currentUser: userAuth});
      setCurrentUser(userAuth);
      }
    });
  }

  componentWillReceiveProps(){
    this.unsubscribeFromAuth();
  }

  render(){
    const {currentUser} = this.props;
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path ='/' component ={HomePage} />
          <Route path ='/shop' component ={Shop} />
          <Route exact path ='/checkout' component ={Checkout} />
          <Route 
            exact 
            path ='/signin' 
            render={()=>
              currentUser? 
                (<Redirect to='/' />) : 
                (<Authentication />)} 
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps, {setCurrentUser})(App);
