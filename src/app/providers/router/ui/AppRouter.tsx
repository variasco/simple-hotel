import { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import { Loader } from "shared/ui";
import { AppRouteProps, routeConfig } from "../config/routeConfig/routeConfig";
import { RequireAuth } from "./RequireAuth";

export const AppRouter = () => {
  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const element = (
      <Suspense fallback={<Loader />}>
        <div>{route.element}</div>
      </Suspense>
    );

    return (
      <Route
        key={route.path}
        path={route.path}
        element={route.authOnly ? <RequireAuth>{element}</RequireAuth> : element}
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};
