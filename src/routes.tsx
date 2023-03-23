import { FC } from "react";
import { Route, Routes as BaseRoutes } from "react-router-dom";
import { DefaultLayout } from "./components/Layout";
import { Home } from "./pages/home";

export const Routes: FC = () => {
  return (
    <BaseRoutes>
      {/* dashboard */}
      <Route path="/" element={<DefaultLayout />}>
        {/* default */}
        <Route index element={<Home />} />
      </Route>

      <Route path="*" element={<></>} />
    </BaseRoutes>
  );
};
