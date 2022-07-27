import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import Loader from "../../components/loader/Loader";
import Description from "../../components/logincomponents/Description";
import InputBox from "../../components/logincomponents/InputBox";
import LoginContainer from "../../components/logincomponents/LoginContainer";
import SubmitBtn from "../../components/logincomponents/SubmitBtn";
import useData from "../../context/useData";
import getUser from "./helpers/getUser";

const EnterUsernameScreen = () => {
	const navigation = useNavigation();
	const { user } = useData();
	const [loader, showLoader] = useState(true);
	const [text, setLoginText] = useState("");
	const handleTextChange = (newText: string) => setLoginText(newText);
	const [showComponents, setShowComponents] = useState(false);

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

	useEffect(() => {
		if (user) {
			navigation.navigate("Home" as never);
		}
	}, [user]);

	useEffect(() => {
		setTimeout(() => {
			setShowComponents(true);
			showLoader(false);
		}, 1000);
	}, []);

	const btnProps = { text, handlePress };

	return (
		<LoginContainer>
			{loader && <Loader />}
			{showComponents && <Description text="Enter your username or email" />}
			{showComponents && <InputBox {...inputProps} />}
			{showComponents && <SubmitBtn {...btnProps} />}
		</LoginContainer>
	);
};

export default EnterUsernameScreen;
