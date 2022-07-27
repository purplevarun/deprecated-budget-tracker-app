import { NavigationContainer } from "@react-navigation/native";
import ContextProvider from "./context/ContextProvider";
import AppContainer from "./navigator/AppContainer";

const App = () => {
	return (
		<NavigationContainer>
			<ContextProvider>
				<AppContainer />
			</ContextProvider>
		</NavigationContainer>
	);
};
export default App;
