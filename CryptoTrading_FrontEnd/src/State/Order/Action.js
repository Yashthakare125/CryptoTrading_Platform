import * as types from './ActionTypes';
import api from '@/config/api';

export const payOrder = ({jwt, orderData, amount}) => async (dispatch) => {
	dispatch({type: types.PAY_ORDER_REQUEST});
	try {
		const response = await api.post('/api/orders/pay', orderData, {
			headers: { Authorization: `Bearer ${jwt}` }
		});
		dispatch({
			type: types.PAY_ORDER_SUCCESS,
			payload: response.data,
			amount
		})
		
		console.log("order success: ", response.data);
	} catch {
		console.log("order success error", error);
		dispatch({
			type: types.PAY_ORDER_FAILURE,
			error: error.message
		});
	}
};

export const getOrderById = (jwt, orderId) => async (dispatch) => {
	dispatch({type: types.GET_ORDER_REQUEST});

	try {
		const response = await api.get(`/api/orders/${orderId}`, {
			headers: {Authorization: `Bearer ${jwt}` }
		});

		dispatch({
			type: types.GET_ORDER_SUCCESS,
			payload: response.data,
		});
	} catch (error) {
		console.log("get order error: ", error);
		dispatch({
			type: types.GET_ORDER_FAILURE,
			error: error.message
		});
	}
};

export const getAllOrdersForUser = ({jwt, orderType, assetSymbol}) => async (dispatch) => {
	dispatch({type: types.GET_ALL_ORDERS_REQUEST});

	try {
		const response = await api.get('/api/orders', {
			headers: {Authorization: `Bearer ${jwt}` },
			params: {
				order_type: orderType,
				asset_symbol: assetSymbol,
			}
		});

		dispatch({
			type: types.GET_ALL_ORDERS_SUCCESS,
            payload: response.data,
		})

		console.log("all orders success: ", response.data);
	} catch (error) {
		console.log("all orders error: ", error);
        dispatch({
            type: types.GET_ALL_ORDERS_FAILURE,
            error: error.message
        });
	}
};