import axios from "axios";

const postBudget = async (newBudget: any) => {
	const url =
		"https://purplevarun-nodejs-server.herokuapp.com/budget-tracker/post-budget";

	await axios.post(url, newBudget);
};

export default postBudget;
