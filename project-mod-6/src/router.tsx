import { Routes, Route } from "react-router-dom";
import Settings from "pages/Settings/index";
import { RoutePath } from "types/routes";
import Login from "pages/Login";
// import Settings from "pages/Settings/index";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOME} element={<Settings />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />} />
    </Routes>
  );
};

export default Router;
