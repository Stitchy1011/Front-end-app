// Import de react et des composants des route
import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
// , Navigate
// Imort des views
import SignInUser from "../views/auth/user/LoginUser";

// Liste des route
function Routing() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/connexion" element={<SignInUser />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Routing;