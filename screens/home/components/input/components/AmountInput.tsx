import { TextInput } from "react-native";
import colors from "../../../../../context/Data/Colors";

const AmountInput = () => {
	return (
		<TextInput
			placeholder="Amount"
			style={{
				borderColor: colors.primary,
				borderWidth: 4,
				width: 300,
				minHeight: 50,
				fontSize: 20,
				padding: 10,
				borderRadius: 8,
				marginBottom: 20,
				marginTop: 20,
			}}
			keyboardType="number-pad"
		/>
	);
};

export default AmountInput;
