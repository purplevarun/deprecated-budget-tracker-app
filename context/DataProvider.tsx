import colors from "./Data/Colors";
import MenuData from "./Data/MenuData";

const DataProvider = () => {
	const menuData = MenuData();

	return {
		...menuData,
		colors,
	};
};

export default DataProvider;
