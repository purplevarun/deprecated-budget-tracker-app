import { TextInput } from "react-native";
import colors from "../../../../../context/Data/Colors";

interface Props {
	reason: string;
	setReason: (rsn: string) => void;
}

const ReasonInput = ({ reason, setReason }: Props) => {
	const handleChange = (newReason: string) => {
		setReason(newReason);
	};

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
			value={reason}
			onChangeText={handleChange}
		/>
	);
};

export default ReasonInput;
