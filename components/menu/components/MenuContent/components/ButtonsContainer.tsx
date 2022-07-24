import { View } from "react-native";
import Button from "./Button";

const ButtonsContainer = () => {
	return (
		<View
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Button text="Home" />
			<Button text="My Trips" />
		</View>
	);
};

export default ButtonsContainer;
