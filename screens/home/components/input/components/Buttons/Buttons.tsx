import { Text, TouchableOpacity, View } from "react-native";
import colors from "../../../../../../context/Data/Colors";
import AddButton from "./components/AddButton";
import InputButtonsContainer from "./components/InputButtonsContainer";
import SubtractButton from "./components/SubtractButton";

const Buttons = ({ amount, reason }: { amount: string; reason: string }) => {
	const disabled = () => {
		if (parseInt(amount) <= 0) return true;
		if (reason.length <= 0) return true;
		return false;
	};
	const props = { disabled };
	return (
		<InputButtonsContainer>
			<AddButton {...props} />
			<SubtractButton {...props} />
		</InputButtonsContainer>
	);
};

export default Buttons;
