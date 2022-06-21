import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import {
	// persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from "redux-persist";

// Login
import loginSlice from "./slices/login";
import addUser from "./slices/addUser";

// Logout
import logout from "./slices/logout";

export const combinedReducers = combineReducers({
	// Login
	login: loginSlice,

	// User
	addUser,

	// Logout
	logout,
});

const rootReducer = (state, action) => {
	if (action.type === "logout") {
		state = undefined;
	}
	return combinedReducers(state, action);
};

const persistConfig = {
	key: "root",
	storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, PAUSE, PURGE, REHYDRATE, REGISTER, PERSIST],
			},
		}),
});
export default store;
