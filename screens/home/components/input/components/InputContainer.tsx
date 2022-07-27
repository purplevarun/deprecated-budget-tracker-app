import { View } from "react-native";

const InputContainer = ({ children }: { children: any }) => {
	return (
		<View
			style={{
				marginTop: 20,
				padding: 20,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{children}
		</View>
	);
};

export default InputContainer;
