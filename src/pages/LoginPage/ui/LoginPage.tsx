import cn from "classnames";
import styles from "./LoginPage.module.scss";

export interface LoginPageProps {
  className?: string;
}

const LoginPage = (props: LoginPageProps) => {
  const { className } = props;
  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)}>
      LoginPage
    </div>
  );
};

export default LoginPage;
