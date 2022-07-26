import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import EnterUsernameScreen from "../screens/username/EnterUsernameScreen";
import TripsScreen from "../screens/trips/TripsScreen";

const Navigator = () => {
	const Stack = createNativeStackNavigator();
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
				animation: "fade",
			}}
			initialRouteName="Home"
		>
			{/* public screens */}
			<Stack.Screen name="Home" component={HomeScreen} />
			<Stack.Screen name="My Trips" component={TripsScreen} />

			{/* auth screens */}
			<Stack.Screen name="EnterUsername" component={EnterUsernameScreen} />
			<Stack.Screen name="Login" component={TripsScreen} />
			<Stack.Screen name="Register" component={TripsScreen} />
		</Stack.Navigator>
	);
};

export default Navigator;
