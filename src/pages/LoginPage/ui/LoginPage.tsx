import cn from "classnames";
import { LoginForm } from "entities/LoginForm";
import styles from "./LoginPage.module.scss";

export interface LoginPageProps {
  className?: string;
}

const LoginPage = (props: LoginPageProps) => {
  const { className } = props;
  const mods = {};

  return (
    <div className={cn(styles.root, className, mods)}>
      <div className={styles.filter}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
