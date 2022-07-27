import { useState } from "react";
import { Text, View } from "react-native";
import Loader from "../../components/loader/Loader";
import LoginContainer from "../username/components/LoginContainer";

interface Props {
	route: {
		params: {
			userdata: [
				{
					username: string;
					pin: number;
				}
			];
		};
	};
}

const LoginScreen = ({ route }: Props) => {
	const user = route?.params?.userdata[0];
	const [loader, showLoader] = useState(false);
	return (
		<LoginContainer>
			{loader && <Loader />}
			<Text>LOGIN SCREEN - {user.username}</Text>
		</LoginContainer>
	);
};

export default LoginScreen;
