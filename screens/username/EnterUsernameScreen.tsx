import { useState } from "react";
import Loader from "../../components/loader/Loader";
import Description from "./components/Description";
import InputBox from "./components/InputBox";
import LoginContainer from "./components/LoginContainer";
import SubmitBtn from "./components/SubmitBtn";

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
