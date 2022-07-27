import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import colors from "../../../context/Data/Colors";

interface Props {
	toggleAdd: () => void;
}

const AddBtn = ({ toggleAdd }: Props) => {
	return (
		<TouchableOpacity
			style={{
				position: "absolute",
				right: 35,
				top: 650,
				zIndex: 99,
			}}
			onPress={toggleAdd}
		>
			<Ionicons name="ios-add-circle" size={60} color={colors.primary} />
		</TouchableOpacity>
	);
};

export default AddBtn;
