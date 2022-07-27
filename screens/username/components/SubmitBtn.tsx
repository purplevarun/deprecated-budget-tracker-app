import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../../context/Data/Colors";
import useData from "../../../context/useData";
import getUser from "../helpers/getUser";

interface Props {
	showLoader: (value: boolean) => void;
}

const SubmitBtn = ({ showLoader }: Props) => {
	const { loginText } = useData();
	const disabled = () => {
		return loginText.length < 1;
	};

	const navigation = useNavigation();

	const handlePress = async () => {
		showLoader(true);
		const user = await getUser(loginText);
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
