// Store for native

import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk    from "redux-thunk";
import reducers from "../reducers";

import {
  AppRegistry,
  NavigationExperimental,
} from "react-native";

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

function createReducer(initialState) {
  return (currentState = initialState, action) => {
    switch (action.type) {
      case "push":
        return NavigationStateUtils.push(currentState, {key: action.key});
      case "pop":
        return currentState.index > 0 ? NavigationStateUtils.pop(currentState) : currentState;
      default:
        return currentState;
    }
  };
}

const NavReducer = createReducer({
  index: 0,
  key: "App",
  children: [{key: "Home"}],
});

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

var reducer = combineReducers({reducers, NavReducer});

export default function configureStore() {
  return createStoreWithMiddleware(reducer);
}
