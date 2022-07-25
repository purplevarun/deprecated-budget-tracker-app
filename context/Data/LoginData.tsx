import { useState } from "react";

const LoginData = () => {
	const [loginText, setLoginText] = useState("");
	const handleLoginTextChange = (newText: string) => setLoginText(newText);
	return {
		loginText,
		handleLoginTextChange,
	};
};

export default LoginData;
