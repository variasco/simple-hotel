import { getUserInited, userActions } from "entities/User";
import "normalize.css";
import { Suspense, useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Loader } from "shared/ui";
import { AppRouter } from "./providers/router";
import "./styles/main.scss";

export const App = () => {
  const dispatch = useAppDispatch();
  const inited = useSelector(getUserInited);

  useEffect(() => {
    dispatch(userActions.initAuthData());
  }, [dispatch]);

  return (
    <>
      {/* <Link to={"/"}>Главная</Link>
      <Link to={"/login"}>Логин</Link> */}
      <Suspense fallback={<Loader />}>
        {inited && <AppRouter />}
        {/* Сюда отрисовываются страницы из /src/pages */}
      </Suspense>{" "}
    </>
  );
};
