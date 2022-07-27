import { useNavigation } from "@react-navigation/native";
import { Text, TouchableOpacity } from "react-native";
import colors from "../../../../../context/Data/Colors";
import useData from "../../../../../context/useData";

interface Props {
	text: any;
}

const Button = ({ text }: Props) => {
	const { toggleMenu } = useData();
	const navigation = useNavigation();
	const handlePress = () => {
		toggleMenu();
		navigation.navigate(text as never);
	};
	return (
		<TouchableOpacity
			style={{
				backgroundColor: colors.secondary,
				padding: 10,
				margin: 10,
				borderRadius: 8,
			}}
			onPress={handlePress}
		>
			<Text style={{ fontSize: 22 }}>{text}</Text>
		</TouchableOpacity>
	);
};

export default Button;
