import { combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore} from 'redux';
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userDetailsreducer, userLoginReducer, userRegisterReducer } from "./reducers/userReducer";
import { productListReducer } from "./reducers/productReducer";

const reducer = combineReducers({
    userLogin : userLoginReducer,
    userRegister: userRegisterReducer,
    userDetails : userDetailsreducer,
    postList : productListReducer
})
const userInfoFromLocalStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    userLogin : {userInfo: userInfoFromLocalStorage}
};
const middleware = [thunk];
const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;