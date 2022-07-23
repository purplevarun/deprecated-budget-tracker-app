import { useState } from "react";

const DataProvider = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const toggleMenu = () => {
		setMenuOpen((menuOpen) => !menuOpen);
	};

	return {
		menuOpen,
		toggleMenu,
	};
};

export default DataProvider;
