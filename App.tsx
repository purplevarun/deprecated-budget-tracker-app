import { NavigationContainer } from "@react-navigation/native";
import ContextProvider from "./context/ContextProvider";
import Wrapper from "./navigator/Wrapper";

const App = () => {
	return (
		<ContextProvider>
			<NavigationContainer>
				<Wrapper />
			</NavigationContainer>
		</ContextProvider>
	);
};
export default App;
