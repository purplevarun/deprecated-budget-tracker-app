import { TextInput } from "react-native";
import colors from "../../../context/Data/Colors";
import useData from "../../../context/useData";

const InputBox = () => {
	const { loginText, handleLoginTextChange } = useData();
	return (
		<TextInput
			multiline={false}
			autoCorrect={false}
			maxLength={15}
			style={{
				fontSize: 30,
				borderWidth: 5,
				borderColor: colors.secondary,
				borderRadius: 8,
				height: 60,
				width: 300,
				padding: 10,
			}}
			value={loginText}
			onChangeText={handleLoginTextChange}
			selectionColor={colors.primary}
		/>
	);
};

export default InputBox;
