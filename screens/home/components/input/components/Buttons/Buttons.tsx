import useData from "../../../../../../context/useData";
import AddButton from "./components/AddButton";
import InputButtonsContainer from "./components/InputButtonsContainer";
import SubtractButton from "./components/SubtractButton";
import postBudget from "./helpers/postBudget";

interface Props {
	amount: string;
	reason: string;
	showLoader: (val: boolean) => void;
	toggleAdd: () => void;
}

const Buttons = ({ amount, reason, showLoader, toggleAdd }: Props) => {
	const disabled = () => {
		if (parseInt(amount) <= 0) return true;
		if (reason.length <= 0) return true;
		return false;
	};
	const { user } = useData();

	const onPress = async (type: "CREDIT" | "DEBIT") => {
		const newBudget = {
			user: user?.username,
			date: new Date().toLocaleDateString(),
			time: new Date().toLocaleTimeString(),
			amount: parseInt(amount),
			reason,
			type,
			trip: null,
		};
		showLoader(true);
		await postBudget(newBudget);
		showLoader(false);
		toggleAdd();
	};

	const props = { disabled, onPress };
	return (
		<InputButtonsContainer>
			<AddButton {...props} />
			<SubtractButton {...props} />
		</InputButtonsContainer>
	);
};

export default Buttons;
