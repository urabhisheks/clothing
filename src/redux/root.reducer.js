import {combineReducers} from 'redux';
import userReducer from './user.reducer';
import cartReducer from './cart.reducer';
import directoryReducer from './directory.reducer';
import shopReducer from './shop.reducer';
import {persistReducer} from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session';
// import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storageSession,
  whitelist: ['cart'],
} 

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  directory: directoryReducer,
  shop: shopReducer,
});

export default persistReducer(persistConfig, rootReducer);
