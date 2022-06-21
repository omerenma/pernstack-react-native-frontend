import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { getAuthToken } from "../../src/utils/auth";
// import { getUserAction } from "./getUser";

export const addUserAction = createAsyncThunk(
	"add user",
	async (data, thunkApi) => {
		try {
			const response = await axios.post(
				"https://pernstackbackend.herokuapp.com/api/v1/auth/register",
				data,
				// {
				// 	headers: getAuthToken(),
				// }
			);

			// thunkApi.dispatch(getUserAction());
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const addUserSlice = createSlice({
	name: "add user",
	initialState: {
		loading: false,
		success: false,
		error: false,
		isAuthenticated: false,
		user: {},
		errorData: "",
	},
	reducers: {},
	extraReducers: {
		[addUserAction.pending]: (state) => {
			state.loading = true;
			state.isAuthenticated = false;
		},
		[addUserAction.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.success = true;
			state.user = payload;
		},
		[addUserAction.rejected]: (state, { payload }) => {
			state.loading = false;
			state.success = false;
			state.isAuthenticated = false;
			state.error = true;
			state.errorData = payload;
		},
	},
});
export default addUserSlice.reducer;
