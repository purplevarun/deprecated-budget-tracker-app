import { View } from "react-native";
import colors from "../../../../context/Data/Colors";

interface Props {
	amount: number;
	date: string;
	time: string;
	reason: string;
	trip: string | null;
	type: "DEBIT" | "CREDIT";
	user: string;
}

const Block = ({ amount, user, date, time, reason, trip, type }: Props) => {
	return (
		<View
			style={{
				width: 300,
				height: 100,
				backgroundColor: type === "CREDIT" ? colors.green : colors.red,
				marginBottom: 20,
			}}
		></View>
	);
};

export default Block;
