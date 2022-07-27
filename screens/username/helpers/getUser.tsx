import axios from "axios";

const getUser = async (username: string) => {
	const url = `https://purplevarun-nodejs-server.herokuapp.com/budget-tracker/get-user?username=${username}`;
	const { data } = await axios.get(url);
	return {
		exists: data.docs.length > 0,
		data: data.docs,
	};
};

export default getUser;
