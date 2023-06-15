import { IUser } from "@/interfaces";
import { createContext } from "react";

interface IAuthContext {
    isLoggedIn: boolean;
    user?: IUser;
}

export const AuthContext = createContext({} as IAuthContext);