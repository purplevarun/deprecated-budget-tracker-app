import { TextInput } from "react-native";
import colors from "../../context/Data/Colors";

interface Props {
	text: string;
	handleTextChange: (newText: string) => void;
	keyboardType: any;
	maxLength: number;
}

const InputBox = ({
	keyboardType,
	text,
	handleTextChange,
	maxLength,
}: Props) => {
	return (
		<TextInput
			multiline={false}
			autoCorrect={false}
			maxLength={maxLength}
			style={{
				fontSize: 30,
				borderWidth: 5,
				borderColor: colors.secondary,
				borderRadius: 8,
				height: 60,
				width: 300,
				padding: 10,
				marginTop: 10,
			}}
			value={text}
			onChangeText={handleTextChange}
			selectionColor={colors.primary}
			keyboardType={keyboardType}
		/>
	);
};

export default InputBox;
