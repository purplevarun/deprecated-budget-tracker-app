import LongView from "../../../components/longview/LongView";
import colors from "../../../context/Data/Colors";

const HomeScreenContainer = ({ children }: { children: any }) => {
	return (
		<LongView
			style={{
				alignItems: "center",
				backgroundColor: colors.bg,
				minHeight: 800,
			}}
		>
			{children}
		</LongView>
	);
};

export default HomeScreenContainer;
