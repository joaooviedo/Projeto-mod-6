import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { RoutePath } from "./types/routes";
import Login from "pages/Login";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOME} element={<Home />} />
    </Routes>
  );
};

export default Router;
