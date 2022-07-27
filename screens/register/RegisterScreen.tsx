import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import Loader from "../../components/loader/Loader";
import Description from "../../components/logincomponents/Description";
import InputBox from "../../components/logincomponents/InputBox";
import LoginContainer from "../../components/logincomponents/LoginContainer";
import SubmitBtn from "../../components/logincomponents/SubmitBtn";
import useData from "../../context/useData";
import postUser from "./helpers/postUser";

interface Props {
	route: {
		params: {
			username: string;
		};
	};
}

const RegisterScreen = ({ route }: Props) => {
	const username = route?.params?.username;

	const [loader, showLoader] = useState(false);

	const [pin, setPin] = useState("");
	const handlePinChange = (newPin: string) => setPin(newPin);

	const navigation = useNavigation();

	const { saveUser } = useData();

	const handlePress = async () => {
		const newUser = {
			pin,
			username,
			created: new Date().toLocaleString(),
		};
		showLoader(true);
		await postUser(newUser);
		showLoader(false);
		saveUser({ username });
		navigation.navigate("Home" as never);
	};

	const inputProps = {
		text: pin,
		handleTextChange: handlePinChange,
		keyboardType: "numeric",
		maxLength: 4,
	};

	const btnProps = { handlePress, text: pin };

	return (
		<LoginContainer>
			{loader && <Loader />}
			<Description text="Set your new 4 digit PIN" />
			<InputBox {...inputProps} />
			<SubmitBtn {...btnProps} />
		</LoginContainer>
	);
};

export default RegisterScreen;
