import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import FloatingMenu from "../utils/FloatingMenu";


function Restaurants({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button
				onPress={() => navigation.navigate("Notifications")}
				title="Go to notifications"
			/>
      <FloatingMenu />
		</View>
	);
}

function NotificationsScreen({ navigation }) {
	return (
		<View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
			<Button onPress={() => navigation.goBack()} title="Go back home" />
		</View>
	);
}

const Drawer = createDrawerNavigator();

export default function Drawers() {
	return (
		<Drawer.Navigator initialRouteName="Restaurants">
			<Drawer.Screen name="Restaurants" component={Restaurants} />
			<Drawer.Screen name="Notifications" component={NotificationsScreen} />
		</Drawer.Navigator>
	);
}
