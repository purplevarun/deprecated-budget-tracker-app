import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

interface UserProps {
	username: string;
}

const UserData = () => {
	const [user, setUser] = useState<null | UserProps>();
	const saveUser = async (newData: UserProps) => {
		setUser(newData);
		await AsyncStorage.setItem("user", JSON.stringify(newData));
	};

	const fetchUser = async () => {
		const data = await AsyncStorage.getItem("user");
		if (data) setUser(JSON.parse(data));
	};

	useEffect(() => {
		fetchUser();
	}, []);

	return { user, saveUser };
};

export default UserData;
