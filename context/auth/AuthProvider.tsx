import { useReducer } from "react"
import { AuthContext } from "./AuthContext";
import { IUser } from "@/interfaces";
import { authReducer } from "./authReducer";

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser
}
const AUTH_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
    user: undefined
}

export const AuthProvider = ({ children }: { children: JSX.Element }) => {
    const [state, dispatch] = useReducer(authReducer, AUTH_INITIAL_STATE);

    return (
        <AuthContext.Provider value={{ ...state,  }}>
            {children}
        </AuthContext.Provider>
    )
}