import Description from "./components/Description";
import InputBox from "./components/InputBox";
import LoginContainer from "./components/LoginContainer";
import SubmitBtn from "./components/SubmitBtn";

const EnterUsernameScreen = () => {
	return (
		<LoginContainer>
			<Description />
			<InputBox />
			<SubmitBtn />
		</LoginContainer>
	);
};

export default EnterUsernameScreen;
