import {createStore, compose/* , applyMiddleware*/} from 'redux';
// import someReduxMiddleware from 'some-redux-middleware';
// import someOtherReduxMiddleware from 'some-other-redux-middleware';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist'
// import rootReducer from './reducers/UserInfo';
import {_reducers} from './reducers/index';
import {_actions}  from './actions/index';

// const enhancerList = [];
// const devToolsExtension = window && window.__REDUX_DEVTOOLS_EXTENSION__;

// if (typeof devToolsExtension === 'function') {
//   enhancerList.push(devToolsExtension());
// }

// const composedEnhancer = compose(/* applyMiddleware(someReduxMiddleware, someOtherReduxMiddleware),*/ ...enhancerList);

// const initStore = () => createStore(rootReducer, {}, composedEnhancer);

// module.exports = {
//   initStore
// };
const rootReducer = (state, action) => {
  // Reset redux store with initial state
  if (action.type === _actions._userinfo._setUserinfo) {
    // for all keys defined in your persistConfig(s)
    AsyncStorage.removeItem('persist:root')
    state = undefined;
  }
  return _reducers(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const _initStore = () => {
  let store = createStore(persistedReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),)
  let persistor = persistStore(store)
  return { store, persistor }
}