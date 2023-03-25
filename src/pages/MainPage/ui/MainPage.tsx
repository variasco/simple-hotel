import cn from "classnames";
import { Button, FavoriteButton, Input } from "shared/ui";
import styles from "./MainPage.module.scss";

export interface MainPageProps {
  className?: string;
}

const MainPage = (props: MainPageProps) => {
  const { className } = props;

  return (
    <div className={cn(styles.root, className)}>
      <h1>Main Page</h1>
      <Input label={"Логин"} value={"admin"}></Input>
      <Input
        label={"Пароль"}
        value={"12345678"}
        error={"Описание ошибки будет тут"}
        type="password"
      ></Input>
      <Button>Войти</Button>
      <FavoriteButton />
    </div>
  );
};

export default MainPage;
