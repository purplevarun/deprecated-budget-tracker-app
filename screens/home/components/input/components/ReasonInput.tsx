import { TextInput } from "react-native";
import colors from "../../../../../context/Data/Colors";

const ReasonInput = () => {
	return (
		<TextInput
			placeholder="Reason"
			style={{
				borderColor: colors.secondary,
				borderWidth: 4,
				width: 300,
				minHeight: 50,
				fontSize: 20,
				padding: 10,
				borderRadius: 8,
			}}
			multiline={true}
		/>
	);
};

export default ReasonInput;
