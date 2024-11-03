import api from "@/config/api";
import * as types from "./ActionTypes";

export const getAssetById = ({assetId, jwt}) => async (dispatch) => {
	dispatch({ type: types.GET_ASSET_REQUEST });

	try {
		const response = await api.get(`/api/asset/${assetId}`, {
			headers: { Authorization: `Bearer ${jwt}` }
		});

		dispatch({
			type: types.GET_ASSET_SUCCESS,
			payload: response.data
		});

		console.log("get asset by id", response.data);
	} catch (error) {
		console.log("get asset by id error: ", error);
		dispatch ({
			type: types.GET_ASSET_FAILURE,
            payload: error.message
		})
	}
};

export const getAssetDetails = ({coinId, jwt}) => async(dispatch) => {
	dispatch({type: types.GET_ASSET_DETAILS_REQUEST});
	try {
		const response = await api.get(`/api/asset/coin/${coinId}/user`, {
			headers: { Authorization: `Bearer ${jwt}` }
		});

		dispatch({
			type: types.GET_ASSET_DETAILS_SUCCESS,
			payload: response.data
		});
		console.log("asset details ", response.data);
	} catch (error) {
		console.log("asset details erro: " , error);

		dispatch({
			type: types.GET_ASSET_DETAILS_FAILURE,
            payload: error.message
		})
	}
};

export const getUserAssets = (jwt) => async (dispatch) => {
	dispatch({type: types.GET_USER_ASSET_REQUEST});

	try {
		const response = await api.get("/api/asset", {
			headers: { Authorization: `Bearer ${jwt}` }
		});

		dispatch({
			type: types.GET_USER_ASSET_SUCCESS,
			payload: response.data
		});

		console.log("User Assets: ", response.data);
	} catch (error) {
		console.log("user assets error: ", error);
		dispatch({
            type: types.GET_USER_ASSET_FAILURE,
            payload: error.message
        })
	}
};

