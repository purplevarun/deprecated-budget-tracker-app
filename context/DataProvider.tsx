import colors from "./Data/Colors";
import LoginData from "./Data/LoginData";
import MenuData from "./Data/MenuData";
import UserData from "./Data/UserData";

const DataProvider = () => {
	const menuData = MenuData();
	const userData = UserData();
	const loginData = LoginData();
	return {
		...menuData,
		...userData,
		...loginData,
		colors,
	};
};

export default DataProvider;
