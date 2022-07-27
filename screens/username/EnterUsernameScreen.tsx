import { useState } from "react";
import Loader from "../../components/loader/Loader";
import Description from "../../components/logincomponents/Description";
import InputBox from "../../components/logincomponents/InputBox";
import LoginContainer from "../../components/logincomponents/LoginContainer";
import SubmitBtn from "../../components/logincomponents/SubmitBtn";

const EnterUsernameScreen = () => {
	const [loader, showLoader] = useState(false);

	const [loginText, setLoginText] = useState("");
	const handleLoginTextChange = (newText: string) => setLoginText(newText);

	const inputProps = { loginText, handleLoginTextChange };

	const btnProps = { showLoader, loginText };
	return (
		<LoginContainer>
			{loader && <Loader />}
			<Description text="Enter your username or email" />
			<InputBox {...inputProps} />
			<SubmitBtn {...btnProps} />
		</LoginContainer>
	);
};

export default EnterUsernameScreen;
