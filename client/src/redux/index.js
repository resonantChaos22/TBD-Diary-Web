import { createStore, combineReducers, applyMiddleware, compose } from "redux";
// import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootsaga";

// IMPORT ALL YOUR REDUCERS HERE
import layout from "./reducers/layout";
import people from "./reducers/people";

const appReducer = combineReducers({
  layout,
  people,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const middleWares = [sagaMiddleware, thunk];

export const store = createStore(
  appReducer,
  composeEnhancers(applyMiddleware(...middleWares))
);

// export default applyMiddleware(...middleWares)(createStore)(appReducer);

sagaMiddleware.run(rootSaga);
