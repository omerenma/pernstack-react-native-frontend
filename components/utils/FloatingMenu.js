import React, { useState } from "react";
import { View, Text } from "react-native";
import { FAB } from "@rneui/base";

export default () => {
	const [visible, setVisible] = React.useState(true);

	return (
		<FAB
			visible={visible}
			icon={{ name: "menu", color: "white" }}
			color="coral"
			placement="right"
		/>
	);
};
