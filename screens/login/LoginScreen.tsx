import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import colors from "../../context/Data/Colors";

const LoginScreen = () => {
	const [text, setText] = useState("");
	const handleChange = (newText: string) => setText(newText);
	return (
		<View
			style={{
				backgroundColor: colors.bg,
				height: "100%",
				width: "100%",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				paddingBottom: 200,
			}}
		>
			<Text style={{ marginBottom: 20, fontSize: 20 }}>
				Enter your email or phone number
			</Text>
			<TextInput
				multiline={false}
				autoCorrect={false}
				maxLength={15}
				style={{
					fontSize: 30,
					borderWidth: 5,
					borderColor: colors.secondary,
					borderRadius: 8,
					height: 60,
					width: 300,
					padding: 10,
				}}
				value={text}
				onChangeText={handleChange}
				selectionColor={colors.primary}
			/>

			<TouchableOpacity
				style={{
					margin: 10,
					padding: 10,
					marginTop: 30,
					borderColor: colors.secondary,
					borderWidth: 5,
					backgroundColor: colors.primary,
					borderRadius: 8,
				}}
			>
				<Text
					style={{
						color: colors.bg,
						fontSize: 22,
					}}
				>
					Submit
				</Text>
			</TouchableOpacity>
		</View>
	);
};

export default LoginScreen;
