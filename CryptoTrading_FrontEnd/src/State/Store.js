import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	coin: coinReducer,
	wallet: walletReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));