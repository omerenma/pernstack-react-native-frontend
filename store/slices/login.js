import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
	"login/action",
	async (data, thunkApi) => {
		try {
			const response = await axios.post(
				"https://pernstackbackend.herokuapp.com/api/v1/auth/login",
				data,
				{
					headers: {
						"content-type": "application/json",
					},
				}
			);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(error.message);
		}
	}
);

const loginSlice = createSlice({
	name: "login",
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
		[loginAction.pending]: (state) => {
			state.loading = true;
			state.isAuthenticated = false;
		},
		[loginAction.fulfilled]: (state, { payload }) => {
			state.loading = false;
			state.isAuthenticated = true;
			state.success = true;
			state.user = payload;
		},
		[loginAction.rejected]: (state, { payload }) => {
			state.loading = false;
			state.success = false;
			state.isAuthenticated = false;
			state.error = true;
			state.errorData = payload;
		},
	},
});
export default loginSlice.reducer;
