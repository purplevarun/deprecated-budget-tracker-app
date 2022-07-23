import { ReactNode } from "react";
import { ScrollView } from "react-native";

interface Props {
	children: ReactNode;
	style?: { alignItems?: string } | any;
}
const LongView = ({ children, style }: Props) => {
	const paddingBottom = 120;
	return (
		<ScrollView
			style={{
				display: "flex",
				flexDirection: "column",
			}}
			contentContainerStyle={{ ...style, paddingBottom }}
		>
			{children}
		</ScrollView>
	);
};

export default LongView;
