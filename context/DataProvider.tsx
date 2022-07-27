import MenuData from "./Data/MenuData";
import UserData from "./Data/UserData";

const DataProvider = () => {
	const menuData = MenuData();
	const userData = UserData();
	return {
		...menuData,
		...userData,
	};
};

export default DataProvider;
