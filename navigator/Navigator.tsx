import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import TripsScreen from "../screens/trips/TripsScreen";

const Navigator = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: "flip",
			}}
			initialRouteName="Home"
		>
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="My Trips" component={TripsScreen} />
		</Stack.Navigator>
	);
};

export default Navigator;
