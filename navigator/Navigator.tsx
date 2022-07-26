import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/home/HomeScreen";
import EnterUsernameScreen from "../screens/username/EnterUsernameScreen";
import TripsScreen from "../screens/trips/TripsScreen";
import LoginScreen from "../screens/login/LoginScreen";
import RegisterScreen from "../screens/register/RegisterScreen";

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
			<Stack.Screen name="Login" component={LoginScreen} />
			<Stack.Screen name="Register" component={RegisterScreen} />
		</Stack.Navigator>
	);
};

export default Navigator;
