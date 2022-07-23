import { createContext } from "react";
import DataProvider from "./DataProvider";

const Context = createContext({} as ReturnType<typeof DataProvider>);

export default Context;
