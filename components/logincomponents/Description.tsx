import { Text } from "react-native";

const Description = ({ text }: { text: string }) => {
	return <Text style={{ marginBottom: 20, fontSize: 20 }}>{text}</Text>;
};

export default Description;
