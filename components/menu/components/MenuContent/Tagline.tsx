import { Text } from "react-native";
import useData from "../../../../context/useData";
const Tagline = () => {
	const { colors } = useData();

	return (
		<Text
			style={{
				fontSize: 18,
				fontWeight: "500",
				color: colors.green,
				marginBottom: 30,
			}}
		>
			Keep track of your money
		</Text>
	);
};

export default Tagline;
