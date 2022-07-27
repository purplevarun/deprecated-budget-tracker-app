import { View } from "react-native";

const InputButtonsContainer = ({ children }: { children: any }) => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "row",
				marginTop: 30,
				justifyContent: "space-between",
				width: 250,
			}}
		>
			{children}
		</View>
	);
};

export default InputButtonsContainer;
