import React, {useState} from "react";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Navigation } from "react-native-navigation";
import store from "./store/store";
import SafeAreaView from "./components/SafeAreaView";
import { List } from "./components/List";
import Header from "./components/Header";
import { Signup } from "./components/auth/Signup";
import { Login } from "./components/auth/Login";
import Dashboard from "./components/screems/Dashboard";



const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<Provider store={store}>
			<SafeAreaView>
				 <NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={Signup}
							options={{ title: "Signup" }}
						/>
						<Stack.Screen
							name="Login"
							component={Login}
							options={{ title: "Login" }}
						/>
						<Stack.Screen name="Dashboard" component={Dashboard} />
					</Stack.Navigator>

				</NavigationContainer> 
			</SafeAreaView>
		</Provider>
	);
}

// registerRootComponent(App)
