import { useState } from "react";
import AmountInput from "./components/AmountInput";
import Buttons from "./components/Buttons/Buttons";
import InputContainer from "./components/InputContainer";
import ReasonInput from "./components/ReasonInput";

const InputBudget = () => {
	const [amount, setAmount] = useState("");
	const [reason, setReason] = useState("");
	const amtProps = { amount, setAmount };
	const rsnProps = { reason, setReason };
	const btnProps = { amount, reason };
	return (
		<InputContainer>
			<AmountInput {...amtProps} />
			<ReasonInput {...rsnProps} />
			<Buttons {...btnProps} />
		</InputContainer>
	);
};

export default InputBudget;
