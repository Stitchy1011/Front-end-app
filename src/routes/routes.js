// Import de react et des composants des route
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// , Navigate
// Imort des views
import SignInUser from "../views/auth/user/LoginUser";
import SignUpUser from "../views/auth/user/RegisterUser";

// Liste des route
function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/connexion" />} />
                <Route path="/connexion" element={<SignInUser />} />
                <Route path="/register" element={<SignUpUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;