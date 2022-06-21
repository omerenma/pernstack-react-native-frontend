// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";
// import { getAuthToken } from "../../src/utils/auth";
// import { Api } from "../../src/utils/Api";

// // const get = new Api();
// export const getUserAction = createAsyncThunk("get user", async (thunkApi) => {
// 	try {
// 		// get.get('https://stetis-cms-api.herokuapp.com/api/get-countries');
// 		const res = await axios.get("https://stetis-cms-api.herokuapp.com/api/", {
// 			headers: getAuthToken(),
// 		});
// 		return res.data;
// 	} catch (error) {
// 		return thunkApi.rejectWithValue(error.message);
// 	}
// });

// const getUserSlice = createSlice({
// 	name: "get user",
// 	initialState: {
// 		loading: false,
// 		success: false,
// 		error: false,
// 		data: {},
// 		errorData: {},
// 	},
// 	reducers: {},
// 	extraReducers: {
// 		[getUserAction.pending]: (state) => {
// 			state.loading = true;
// 			state.isAuthenticated = false;
// 		},
// 		[getUserAction.fulfilled]: (state, { payload }) => {
// 			state.loading = false;
// 			state.success = true;
// 			state.data = payload;
// 		},
// 		[getUserAction.rejected]: (state, { payload }) => {
// 			state.loading = false;
// 			state.success = false;
// 			state.error = true;
// 			state.errorData = payload;
// 		},
// 	},
// });
// export default getUserSlice.reducer;
