import { useState } from "react";
import AddBtn from "./components/AddBtn";
import Transactions from "./components/budgets/Transactions";
import HomeScreenContainer from "./components/HomeScreenContainer";
import InputBudget from "./components/input/InputBudget";
import TodaysDate from "./components/TodaysDate";

const HomeScreen = () => {
	//
	const [add, setAdd] = useState(false);
	const toggleAdd = () => setAdd((add) => !add);
	const addProps = { toggleAdd };
	//
	return (
		<HomeScreenContainer>
			<AddBtn {...addProps} />
			<TodaysDate />
			{add && <InputBudget {...addProps} />}
			<Transactions />
		</HomeScreenContainer>
	);
};
export default HomeScreen;
