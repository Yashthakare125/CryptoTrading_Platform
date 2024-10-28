import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";

const rootReducer = combineReducers({
	auth: authReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));