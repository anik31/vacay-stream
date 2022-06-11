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
    const [isAuthLoading, setIsAuthLoading] = useState(false);

    const loginUser = async (credentials) => {
            try {
                setIsAuthLoading(true);
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
            }finally{
                setIsAuthLoading(false);
            }
    };
    
    const signUpUser = async (credentials) => {
        try {
            setIsAuthLoading(true);
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
        }finally{
            setIsAuthLoading(false);
        }
    };
    
    const verifyUser = async (encodedToken) => {
        try {
            setIsAuthLoading(true);
            const {data, status } = await axios({
                method: "post",
                data: {encodedToken},
                url: "/api/auth/verify"
            });
            if (status === 201) {
                setIsLoggedIn(true);
                setToken(encodedToken);
                setUser(data);
            }
        } catch (error) {
            toast.error(error.response.data.errors[0]);
        }finally{
            setIsAuthLoading(false);
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
        <AuthContext.Provider value={{isLoggedIn, user, token, isAuthLoading,
        loginUser, logoutUser, signUpUser, verifyUser}}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => useContext(AuthContext);

export {AuthProvider, useAuth};