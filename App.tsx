import { NavigationContainer } from "@react-navigation/native";
import ContextProvider from "./context/ContextProvider";
import Wrapper from "./navigator/Wrapper";

const App = () => {
	return (
		<NavigationContainer>
			<ContextProvider>
				<Wrapper />
			</ContextProvider>
		</NavigationContainer>
	);
};
export default App;
