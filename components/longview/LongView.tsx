import { ReactNode } from "react";
import { ScrollView } from "react-native";

const LongView = ({ children }: { children: ReactNode }) => {
	return (
		<ScrollView
			style={{
				display: "flex",
				flexDirection: "column",
				height: "100%",
			}}
			contentContainerStyle={{
				alignItems: "center",
			}}
		>
			{children}
		</ScrollView>
	);
};

export default LongView;
