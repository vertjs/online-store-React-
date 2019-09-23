import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
  } from 'redux'
import serviceListReducer from '../reducers/serviceList'
import serviceCategoriesReducer from '../reducers/serviceCategories'
import serviceDataCategories from '../reducers/serviceDataCategories'
import serviceSearchReducer from '../reducers/serviceSearch'
import thunk from 'redux-thunk'
  
const reducer = combineReducers({
    serviceList: serviceListReducer,
    serviceCategories: serviceCategoriesReducer,
    serviceDataCategories: serviceDataCategories,
    serviceSearch: serviceSearchReducer
});
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)),
);
  
export default store;