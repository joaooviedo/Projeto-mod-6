import { Routes, Route } from "react-router-dom";
import Home from "pages/Home/index";
import { RoutePath } from "types/routes";
import Login from "pages/Login";
import ManageProducts from "components/ManageProducts";
import Settings from "pages/Settings/index";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.LOGIN} element={<Login />} />
      <Route path={RoutePath.HOME} element={<Home />} />
      <Route path={RoutePath.SETTINGS} element={<Settings />} />
      <Route path={RoutePath.SETTINGS_PRODUCTS} element={<ManageProducts />} />

    </Routes>
  );
};

export default Router;
