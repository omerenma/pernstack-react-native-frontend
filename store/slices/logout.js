import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const loginOutSlice = createSlice({
	name: "logout",
	initialState: {
		loading: false,
		success: false,
		error: false,
		// isAuthenticated: store.getState().login,
		user: {},
		errorData: "",
	},
	reducers: {
		logout: (state, action) => {
			// console.log(store.getState().login, "state");
		},
	},
	extraReducers: {},
});
export const { logout } = loginOutSlice.actions;
export default loginOutSlice.reducer;
