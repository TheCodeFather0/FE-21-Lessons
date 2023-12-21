import { Route, Routes } from "react-router";
import myRoutes from "../Routes";

const WebRoutes = () => {
  return (
    <Routes>
      {myRoutes.map(({ id, path, element }) => {
        return <Route key={id} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default WebRoutes;
