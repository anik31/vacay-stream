import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "../../context";


export function RestrictAuth() {
    const location = useLocation();
    const {isLoggedIn} = useAuth();

    return isLoggedIn ? <Navigate to={ location?.state?.from?.pathname || "/" } replace /> : <Outlet/>;
}