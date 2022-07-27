import { Text, TouchableOpacity, View } from "react-native";
import colors from "../../../../../../context/Data/Colors";
import AddButton from "./components/AddButton";
import InputButtonsContainer from "./components/InputButtonsContainer";
import SubtractButton from "./components/SubtractButton";

const Buttons = () => {
	return (
		<InputButtonsContainer>
			<AddButton />
			<SubtractButton />
		</InputButtonsContainer>
	);
};

export default Buttons;
