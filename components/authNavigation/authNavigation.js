import React from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import store from "./store/store";
import SafeAreaView from "./components/SafeAreaView";
import { List } from "./components/List";
import { Signup } from "./components/auth/Signup";
import { Login } from "./components/auth/Login";

const screens = {
	Home: {
		screen: Signup,
	},
	Login: {
		screen: {
			Login,
		},
	},
};
const HomeStack = createNativeStackNavigator(screens);
export default NavigationContainer(HomeStack);
