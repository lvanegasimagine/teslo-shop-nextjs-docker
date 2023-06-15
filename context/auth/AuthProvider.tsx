import { useReducer } from "react"
import { AuthContext } from "./AuthContext";
import { IUser } from "@/interfaces";
import { authReducer } from "./authReducer";
import { tesloApi } from "@/api";
import Cookies from 'js-cookie';
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

    const loginUser = async (email: string, password: string): Promise<boolean> => {
        try {
            const { data } = await tesloApi.post('/user/login', { email, password });
            const { token, user } = data
            Cookies.set('token', token);
            dispatch({ type: '[Auth] - Login', payload: user });
            return true;
        } catch (error) {
            return false;
        }
    }

    return (
        <AuthContext.Provider value={{ ...state, loginUser}}>
            {children}
        </AuthContext.Provider>
    )
}