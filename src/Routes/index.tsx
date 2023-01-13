import { Route, Routes } from "react-router-dom";
import { Home } from "../Pages/Home";
import { LoginPage } from "../Pages/Login";
import { NotFoundPage } from "../Pages/NotFound";
import { RegisterPage } from "../Pages/Register";
import { WelcomePage } from "../Pages/Welcome";
import { ProtectRoute } from "./ProtectRoutes";

export const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            <Route element={<ProtectRoute />}>
                    <Route path="/home"     element={<Home />}/>
            </Route>

      <Route path="/home" element={<Home />} />

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
