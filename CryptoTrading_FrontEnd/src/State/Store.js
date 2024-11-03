import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import authReducer from "./Auth/Reducer";
import coinReducer from "./Coin/Reducer";
import walletReducer from "./Wallet/Reducer";
import withdrawalReducer from "./Withdrawal/Reducer";
import orderReducer from "./Order/Reducer";
import assetReducer from "./Asset/Reducer";
import watchlistReducer from "./Watchlist/Reducer";

const rootReducer = combineReducers({
	auth: authReducer,
	coin: coinReducer,
	wallet: walletReducer,
	withdrawal: withdrawalReducer,
	order: orderReducer,
	asset: assetReducer,
	watchlist: watchlistReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));