import { Text, TouchableOpacity } from "react-native";
import colors from "../../../context/Data/Colors";
import useData from "../../../context/useData";

const SubmitBtn = () => {
	const { saveUser, user } = useData();

	const handlePress = () => {
		saveUser({ username: "purplevarun" });
		console.log(user);
	};

	return (
		<TouchableOpacity
			onPress={handlePress}
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
	);
};

export default SubmitBtn;
