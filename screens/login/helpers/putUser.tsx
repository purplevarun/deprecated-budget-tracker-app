import axios from "axios";

const putUser = async (username: string) => {
	const putData = {
		newLoginDate: new Date().toLocaleString(),
	};
	await axios.put(
		`https://purplevarun-nodejs-server.herokuapp.com/budget-tracker/put-user?username=${username}`,
		putData
	);
};

export default putUser;
