import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../../context/Data/Colors";
import useData from "../../../context/useData";

interface Props {
	showLoader: (value: boolean) => void;
}

const SubmitBtn = ({ showLoader }: Props) => {
	const { loginText } = useData();
	const disabled = () => {
		return loginText.length < 1;
	};

	const navigation = useNavigation();

	const getUser = async () => {
		const url = `https://purplevarun-nodejs-server.herokuapp.com/budget-tracker/get-user?username=${loginText}`;
		const { data } = await axios.get(url);
		console.log(data);
		return {
			exists: data.docs.length > 0,
			data: data.docs,
		};
	};

	const handlePress = async () => {
		showLoader(true);
		const user = await getUser();
		showLoader(false);
		if (user.exists) {
			navigation.navigate("Login" as never);
		} else {
			navigation.navigate("Register" as never);
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
