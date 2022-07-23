import Context from "./Context";
import DataProvider from "./DataProvider";

const ContextProvider = ({ children }: { children: any }) => {
	const data = DataProvider();
	return <Context.Provider value={data}>{children}</Context.Provider>;
};

export default ContextProvider;
