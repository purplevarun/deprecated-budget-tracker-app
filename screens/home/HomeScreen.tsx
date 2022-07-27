import AddBtn from "./components/AddBtn";
import HomeScreenContainer from "./components/HomeScreenContainer";
import TodaysDate from "./components/TodaysDate";

const HomeScreen = () => {
	return (
		<HomeScreenContainer>
			<TodaysDate />
			<AddBtn />
		</HomeScreenContainer>
	);
};
export default HomeScreen;
