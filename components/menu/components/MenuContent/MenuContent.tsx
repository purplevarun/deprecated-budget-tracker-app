import { View } from "react-native";
import ButtonsContainer from "./components/ButtonsContainer";
import WelcomeUser from "./components/WelcomeUser";
import Tagline from "./Tagline";

const MenuContent = () => {
	return (
		<View
			style={{
				paddingTop: 20,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			<Tagline />
			<WelcomeUser />
			<ButtonsContainer />
		</View>
	);
};
export default MenuContent;
