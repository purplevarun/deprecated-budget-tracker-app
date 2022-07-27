import { View } from "react-native";
import colors from "../../context/Data/Colors";

const LoginContainer = ({ children }: { children: any }) => {
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
			{children}
		</View>
	);
};

export default LoginContainer;
