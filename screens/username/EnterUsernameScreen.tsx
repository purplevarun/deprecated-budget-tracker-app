import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Loader from "../../components/loader/Loader";
import Description from "../../components/logincomponents/Description";
import InputBox from "../../components/logincomponents/InputBox";
import LoginContainer from "../../components/logincomponents/LoginContainer";
import SubmitBtn from "../../components/logincomponents/SubmitBtn";
import getUser from "./helpers/getUser";

const EnterUsernameScreen = () => {
	const navigation = useNavigation();

	const [loader, showLoader] = useState(false);
	const [text, setLoginText] = useState("");
	const handleTextChange = (newText: string) => setLoginText(newText);

	const inputProps = {
		text,
		handleTextChange,
	};

	const handlePress = async () => {
		showLoader(true);
		const user = await getUser(text);
		showLoader(false);
		if (user.exists) {
			navigation.navigate("Login" as never, { userdata: user.data } as never);
		} else {
			navigation.navigate("Register" as never);
		}
	};

	const btnProps = { text, handlePress };
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
