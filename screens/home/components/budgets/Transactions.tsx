import axios from "axios";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import Loader from "../../../../components/loader/Loader";
import useData from "../../../../context/useData";
import Block from "./Block";

type transaction = {
	amount: number;
	date: string;
	time: string;
	reason: string;
	trip: string | null;
	type: "DEBIT" | "CREDIT";
	user: string;
};

const Transactions = () => {
	const [trans, setTrans] = useState<[] | null>(null);
	const { user } = useData();

	const getBudget = async () => {
		const url = `https://purplevarun-nodejs-server.herokuapp.com/budget-tracker/get-budget?user=${user?.username}`;
		const { data } = await axios.get(url);
		setTrans(data.docs);
	};

	useEffect(() => {
		console.log("use effect called");
		getBudget();
	}, []);

	const renderTransactions = () => {
		console.log(trans);

		if (trans) {
			return (
				<View>
					{trans.map((tran: transaction, idx) => {
						return <Block key={idx} {...tran} />;
					})}
				</View>
			);
		} else {
			return <Loader />;
		}
	};

	return <View style={{ marginTop: 20 }}>{renderTransactions()}</View>;
};

export default Transactions;
