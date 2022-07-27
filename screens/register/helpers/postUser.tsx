import axios from "axios";

interface Props {
	username: string;
	pin: string;
	created: string;
}

const postUser = async (newUser: Props) => {
	const url =
		"https://purplevarun-nodejs-server.herokuapp.com/budget-tracker/post-user";
	await axios.post(url, newUser);
};

export default postUser;
