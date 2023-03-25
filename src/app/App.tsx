import { Link } from "react-router-dom";
import { AppRouter } from "./providers/router";
import "./styles/main.scss";

export const App = () => {
  return (
    <>
      <Link to={"/"}>Главная</Link>
      <Link to={"/login"}>Логин</Link>
      <AppRouter /> {/* Сюда отрисовываются страницы из /src/pages */}
    </>
  );
};
