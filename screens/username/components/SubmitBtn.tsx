import axios from "axios";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../../context/Data/Colors";
import useData from "../../../context/useData";

const SubmitBtn = () => {
	const { loginText } = useData();
	const disabled = () => {
		return loginText.length < 1;
	};

	const userExists = async () => {
		const url = `https://purplevarun-nodejs-server.herokuapp.com/budget-tracker/get-user?username=${loginText}`;
		const { data } = await axios.get(url);
		console.log(data);
		return data.docs.length > 0;
	};

	const handlePress = async () => {
		console.log("pressed submit btn");
		const user = await userExists();
		if (user) {
		}
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
				backgroundColor: disabled() ? colors.grey : colors.primary,
				borderRadius: 8,
			}}
			disabled={disabled()}
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
