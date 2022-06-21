import {
	StatusBar,
	StyleSheet,
	View,
	Platform,
	SafeAreaView,
} from "react-native";

const SafeArea = ({ children }) => {
	return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
        flexGrow:1,
		paddingTop: Platform.OS === "ios" ? SafeAreaView : StatusBar.currentHeight,
		
	},
});

export default SafeArea;
