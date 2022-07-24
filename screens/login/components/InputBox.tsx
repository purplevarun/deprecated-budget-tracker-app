import { useState } from "react";
import { TextInput } from "react-native";
import colors from "../../../context/Data/Colors";

const InputBox = () => {
	const [text, setText] = useState("");
	const handleChange = (newText: string) => setText(newText);
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
			value={text}
			onChangeText={handleChange}
			selectionColor={colors.primary}
		/>
	);
};

export default InputBox;
