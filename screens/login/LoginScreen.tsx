import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Loader from "../../components/loader/Loader";
import Description from "../../components/logincomponents/Description";
import InputBox from "../../components/logincomponents/InputBox";
import LoginContainer from "../../components/logincomponents/LoginContainer";
import SubmitBtn from "../../components/logincomponents/SubmitBtn";
import useData from "../../context/useData";
import IncorrectPin from "./components/IncorrectPin";
import putUser from "./helpers/putUser";

interface Props {
	route: {
		params: {
			userdata: [
				{
					username: string;
					pin: string;
				}
			];
		};
	};
}

const LoginScreen = ({ route }: Props) => {
	const user = route?.params?.userdata[0];
	const [loader, showLoader] = useState(false);
	const [error, showError] = useState(false);

	const [pin, setPin] = useState("");
	const handlePinChange = (newPin: string) => setPin(newPin);

	const inputProps = {
		text: pin,
		handleTextChange: handlePinChange,
		keyboardType: "numeric",
		maxLength: 4,
	};

	const { saveUser } = useData();

	const navigation = useNavigation();

	const handlePress = async () => {
		if (user.pin === pin) {
			showError(false);
			showLoader(true);
			saveUser({ username: user.username });
			await putUser(user.username);
			showLoader(false);
			navigation.navigate("Home" as never);
		} else {
			showError(true);
		}
	};

	const btnProps = { handlePress, text: pin };

	return (
		<LoginContainer>
			{loader && <Loader />}
			<Description text="Enter your 4 digit PIN" />
			{error && <IncorrectPin />}
			<InputBox {...inputProps} />
			<SubmitBtn {...btnProps} />
		</LoginContainer>
	);
};

export default LoginScreen;
