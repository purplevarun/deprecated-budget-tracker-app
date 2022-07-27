import AmountInput from "./components/AmountInput";
import Buttons from "./components/Buttons/Buttons";
import InputContainer from "./components/InputContainer";
import ReasonInput from "./components/ReasonInput";

const InputBudget = () => {
	return (
		<InputContainer>
			<AmountInput />
			<ReasonInput />
			<Buttons />
		</InputContainer>
	);
};

export default InputBudget;
