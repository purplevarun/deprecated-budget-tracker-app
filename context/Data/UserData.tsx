import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

interface UserProps {
	email: string;
	img: string;
}

const UserData = () => {
	const [user, setUser] = useState<null | UserProps>(null);
	const saveUser = async (newData: UserProps) => {
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
