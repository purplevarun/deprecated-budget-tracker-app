import { Text } from "react-native";
import colors from "../../../../context/Data/Colors";
const Tagline = () => {
	return (
		<Text
			style={{
				fontSize: 18,
				fontWeight: "500",
				color: colors.green,
				marginBottom: 100,
			}}
		>
			Keep track of your money
		</Text>
	);
};

export default Tagline;
