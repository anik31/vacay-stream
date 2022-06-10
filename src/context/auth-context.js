import {createContext, useContext, useState} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const loginUser = async (credentials) => {
            try {
                const {data: { foundUser, encodedToken }, status } = await axios({
                    method: "post",
                    data: credentials,
                    url: "/api/auth/login"
                });
                toast.success('Login successful');
                if (status === 200) {
                setIsLoggedIn(true);
                setToken(encodedToken);
                setUser(foundUser);
                navigate(location?.state?.from?.pathname || "/");
                localStorage.setItem("encodedToken", encodedToken);
                }
            } catch (error) {
                toast.error(error.response.data.errors[0]);
            }
    };
    
    const signUpUser = async (credentials) => {
        try {
            const {data: { createdUser, encodedToken }, status } = await axios({
                method: "post",
                data: credentials,
                url: "/api/auth/signup"
            });
            toast.success('Signup successful');
            if (status === 201) {
                setIsLoggedIn(true);
                setToken(encodedToken);
                setUser(createdUser);
                navigate(location?.state?.from?.pathname || "/");
                localStorage.setItem("encodedToken", encodedToken);
            }
        } catch (error) {
            toast.error(error.response.data.errors[0]);
        }
    };
    const logoutUser = () => {
        toast.success('Logged out');
        setIsLoggedIn(false);
        setToken("");
        setUser({});
        localStorage.setItem("encodedToken", "");
    };
    return (
        <AuthContext.Provider value={{isLoggedIn, user, token, loginUser, logoutUser, signUpUser}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};