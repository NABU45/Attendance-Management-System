import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import useRegister from "../hooks/useRegister";

const ProtectedRoute = () => {
    const { register } = useRegister();
    const navigate = useNavigate();

    useEffect(() => {
        if (!register) {
            navigate("/login");
        }
    }, []);

    return <Outlet />;
}

export default ProtectedRoute;
