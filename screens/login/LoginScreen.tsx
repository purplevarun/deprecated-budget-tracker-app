import { useState } from "react";
import Loader from "../../components/loader/Loader";
import Description from "../../components/logincomponents/Description";
import InputBox from "../../components/logincomponents/InputBox";
import LoginContainer from "../../components/logincomponents/LoginContainer";
import SubmitBtn from "../../components/logincomponents/SubmitBtn";

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

	const [pin, setPin] = useState("");
	const handlePinChange = (newPin: string) => setPin(newPin);

	const inputProps = { text: pin, handleTextChange: handlePinChange };

	const handlePress = async () => {};

	const btnProps = { handlePress, text: pin };

	return (
		<LoginContainer>
			{loader && <Loader />}
			<Description text="Enter your 4 digit PIN" />
			<InputBox {...inputProps} />
			<SubmitBtn {...btnProps} />
		</LoginContainer>
	);
};

export default LoginScreen;
