import React, { useState } from "react";
import { showMessage, hideMessage } from "react-native-flash-message";

import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
	View,
	StyleSheet,
	Text,
	Image,
	TouchableOpacity,
	Alert,
} from "react-native";
import { TextInput, Button, Card, TouchableRipple } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { addUserAction } from "../../store/slices/addUser";

export const Signup = ({ navigation }) => {
	const dispatch = useDispatch();
	const { loading, success } = useSelector((state) => state.addUser);

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		const data = {
			name,
			email,
			phone,
			password,
		};

		dispatch(addUserAction(data)).then((res) => {
			if (res.type == "adduser/fulfilled") {
				<View>
					{showMessage({
						message: "Signup successful",
						type: "success",
					})}
				</View>;
			} else {
				<View>
					{showMessage({
						message: "Signup failed",
						type: "danger",
					})}
				</View>;
			}
		});
	};

	return (
		<Card style={styles.container}>
			<View style={styles.img}>
				<Image
					style={{ width: 200, height: 200, resizeMode: "cover" }}
					source={require("../../assets/logo2.png")}
				/>
			</View>

			<View style={styles.form}>
				{/* <Text style={styles.header}>Signup</Text> */}
				<TextInput
					right={<TextInput.Icon name="account" />}
					style={styles.form_input}
					label="Full name"
					value={name}
					name="name"
					onChangeText={(name) => setName(name)}
				/>
				<TextInput
					right={<TextInput.Icon name="email" />}
					style={styles.form_input}
					label="Email"
					value={email}
					name="email"
					onChangeText={(text) => setEmail(text)}
				/>
				<TextInput
					right={<TextInput.Icon name="phone" />}
					style={styles.form_input}
					label="Phone number"
					keyboardType="numeric"
					value={phone}
					name="phone"
					onChangeText={(text) => setPhone(text)}
				/>
				<TextInput
					right={<TextInput.Icon name="eye" />}
					style={styles.form_input}
					label="Password"
					secureTextEntry={true}
					value={password}
					name="password"
					onChangeText={(text) => setPassword(text)}
				/>
				<View style={styles.terms}>
					<Button uppercase={false}>Terms & Conditions apply</Button>
				</View>
				<View style={styles.submit}>
					<TouchableOpacity onPress={handleSubmit}>
						{loading === true ? (
							<ActivityIndicator animating={true} />
						) : (
							<Text
								style={{
									textAlign: "center",
									color: "#fff",
									fontWeight: "bold",
									textTransform: "uppercase",
									padding: 10,
								}}
							>
								submit
							</Text>
						)}
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.login}>
				<Text>Already have an account?</Text>

				<Button
					onPress={() => navigation.navigate("Login", { name: "Login" })}
					style={{ marginTop: -9, marginLeft: -15 }}
				>
					Login
				</Button>
			</View>
		</Card>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	img: {
		flex: 1.1,
		justifyContent: "center",
		alignItems: "center",
	},
	form: {
		// backgroundColor: "blue",
		flex: 2.5,
		justifyContent: "flex-start",
		alignItems: "center",
	},
	form_input: {
		width: 340,
		// height: 40,
		padding: 2,
		borderBottomWidth: 0.005,
		borderBottomColor: "#fefefe",
		border: "none",
		backgroundColor: "transparent",
	},
	terms: {
		marginTop: 10,
		width: 500,
		padding: 3,
	},
	submit: {
		backgroundColor: "coral",
		width: 340,
		padding: 5,
		borderRadius: 20,
	},
	login: {
		flexDirection: "row",
		justifyContent: "center",
		position: "relative",
		bottom: 40,
	},
	header: {
		fontWeight: "bold",
		fontSize: 20,
		textAlign: "left",
	},
});
