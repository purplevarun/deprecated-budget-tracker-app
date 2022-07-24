import Contacts from "./components/Contacts/Contacts";
import MenuContainer from "./components/MenuContainer/MenuContainer";
import MenuContent from "./components/MenuContent/MenuContent";
const Menu = () => {
	return (
		<MenuContainer>
			<MenuContent />
			<Contacts />
		</MenuContainer>
	);
};
export default Menu;
