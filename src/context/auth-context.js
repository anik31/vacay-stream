import {createContext, useContext, useState} from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

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
                if (status === 200) {
                setIsLoggedIn(true);
                setToken(encodedToken);
                setUser(foundUser);
                navigate(location?.state?.from?.pathname || "/");
                localStorage.setItem("encodedToken", encodedToken);
                }
            } catch (error) {
                console.error("Error in login user", error);
            }
    };
    
    const signUpUser = async (credentials) => {
        try {
            const {data: { createdUser, encodedToken }, status } = await axios({
                method: "post",
                data: credentials,
                url: "/api/auth/signup"
            });
            if (status === 201) {
                setIsLoggedIn(true);
                setToken(encodedToken);
                setUser(createdUser);
                navigate(location?.state?.from?.pathname || "/");
                localStorage.setItem("encodedToken", encodedToken);
            }
        } catch (error) {
          console.error("Error in login user", error);
        }
    };
    const logoutUser = () => {
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