import { useState } from "react";
import Loader from "../../components/loader/Loader";
import Description from "./components/Description";
import InputBox from "./components/InputBox";
import LoginContainer from "./components/LoginContainer";
import SubmitBtn from "./components/SubmitBtn";

const EnterUsernameScreen = () => {
	const [loader, showLoader] = useState(false);
	const btnProps = { showLoader };

	return (
		<LoginContainer>
			{loader && <Loader />}
			<Description />
			<InputBox />
			<SubmitBtn {...btnProps} />
		</LoginContainer>
	);
};

export default EnterUsernameScreen;
