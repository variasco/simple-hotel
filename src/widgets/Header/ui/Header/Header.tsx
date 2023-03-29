import cn from "classnames";
import { userActions } from "entities/User";
import LogOutIcon from "shared/assets/icons/log-out.svg";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Button, ButtonTheme } from "shared/ui";
import styles from "./Header.module.scss";

export interface HeaderProps {
  className?: string;
}

export const Header = (props: HeaderProps) => {
  const { className } = props;
  const mods = {};
  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(userActions.logout());
  };

  return (
    <div className={cn(styles.root, className, mods)}>
      <h1 className={styles.header}>Simple Hotel Check</h1>
      <Button className={styles.button} theme={ButtonTheme.Clear} onClick={onLogout}>
        Выйти
        <LogOutIcon className={styles.icon} />
      </Button>
    </div>
  );
};
