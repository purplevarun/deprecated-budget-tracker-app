import { ActivityIndicator } from "react-native";
import colors from "../../context/Data/Colors";

const Loader = () => {
	return <ActivityIndicator size={120} color={colors.primary} />;
};

export default Loader;
