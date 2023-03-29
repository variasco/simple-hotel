import cn from "classnames";
import { LoginForm } from "features/LoginByEmail";
import { Suspense } from "react";
import { Loader } from "shared/ui";
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
        <Suspense fallback={<Loader />}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;
