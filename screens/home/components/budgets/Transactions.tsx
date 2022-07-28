import AsyncStorage from "@react-native-async-storage/async-storage";
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

	const getCloudBudget = async () => {
		const url = `https://purplevarun-nodejs-server.herokuapp.com/budget-tracker/get-budget?user=${user?.username}`;
		const { data } = await axios.get(url);

		console.log("budget data from cloud = ", data.docs);
		await AsyncStorage.setItem("budgets", JSON.stringify(data.docs));
		setTrans(data.docs);
	};

	useEffect(() => {
		console.log("use effect called");
		getCloudBudget();
	}, []);

	const getLocalBudget = async () => {
		const localBudget = JSON.parse(
			(await AsyncStorage.getItem("budgets")) as string
		);
		console.log("local = ", localBudget);
		setTrans(localBudget);
	};

	useEffect(() => {
		getLocalBudget();
	});

	const renderTransactions = () => {
		console.log("trans = ", trans);
		if (trans) {
			return (
				<View>
					{trans.map((tran: transaction, idx) => {
						if (tran.date === new Date().toLocaleDateString())
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
