// Store for native

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk    from 'redux-thunk';
import reducers from '../reducers';

import {
  // AppRegistry,
  NavigationExperimental,
} from 'react-native';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;


const initialNavState = {
  index: 0,
  key: 'root',
  children: [
    {
      key: 'home',
      title: 'Welcome home',
    },
  ],
}


function navigationState(state = initialNavState, action) {
  switch (action.type) {
  case 'NAV_PUSH':
    if (state.routes[state.index].key === (action.state && action.state.key)) return state
    return NavigationStateUtils.push(state, action.state)

  case 'NAV_POP':
    if (state.index === 0 || state.routes.length === 1) return state
    return NavigationStateUtils.pop(state)

  case 'NAV_JUMP_TO_KEY':
    return NavigationStateUtils.jumpTo(state, action.key)

  case 'NAV_JUMP_TO_INDEX':
    return NavigationStateUtils.jumpToIndex(state, action.index)

  case 'NAV_RESET':
    return {
      ...state,
      index: action.index,
      routes: action.routes
    }

  default:
    return state
  }
}

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

var reducer = combineReducers({reducers, navigationState});

export default function configureStore() {
  return createStoreWithMiddleware(reducer);
}
