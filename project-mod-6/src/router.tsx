import { Routes, Route } from "react-router-dom";
import { RoutePath } from "./types/routes";

const Router = () => {
  return (
    <Routes>
      <Route path={RoutePath.HOME} element={<home />} />
    </Routes>
  );
};

export default Router;
