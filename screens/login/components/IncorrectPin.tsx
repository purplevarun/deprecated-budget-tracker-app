import { Text } from "react-native";
import colors from "../../../context/Data/Colors";

const IncorrectPin = () => {
	return (
		<Text style={{ color: colors.red, fontSize: 20, fontWeight: "bold" }}>
			Incorrect PIN
		</Text>
	);
};

export default IncorrectPin;
