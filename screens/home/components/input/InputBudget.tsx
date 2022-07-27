import { useState } from "react";
import Loader from "../../../../components/loader/Loader";
import AmountInput from "./components/AmountInput";
import Buttons from "./components/Buttons/Buttons";
import InputContainer from "./components/InputContainer";
import ReasonInput from "./components/ReasonInput";

const InputBudget = ({ toggleAdd }: { toggleAdd: () => void }) => {
	const [amount, setAmount] = useState("");
	const [reason, setReason] = useState("");
	const [loader, showLoader] = useState(false);
	const amtProps = { amount, setAmount };
	const rsnProps = { reason, setReason };
	const btnProps = { showLoader, amount, reason, toggleAdd };
	return (
		<InputContainer>
			{loader && <Loader />}
			<AmountInput {...amtProps} />
			<ReasonInput {...rsnProps} />
			<Buttons {...btnProps} />
		</InputContainer>
	);
};

export default InputBudget;
