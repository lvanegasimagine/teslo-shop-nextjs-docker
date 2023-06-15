import { IUser } from "@/interfaces";
import { createContext } from "react";

interface IAuthContext {
    isLoggedIn: boolean;
    user?: IUser;

    loginUser: (email: string, password: string) => Promise<boolean>
}

export const AuthContext = createContext({} as IAuthContext);