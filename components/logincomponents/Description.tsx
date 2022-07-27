import { Text } from "react-native";

const Description = ({ text }: { text: string }) => {
	return (
		<Text style={{ marginBottom: 10, fontSize: 22, fontWeight: "bold" }}>
			{text}
		</Text>
	);
};

export default Description;
