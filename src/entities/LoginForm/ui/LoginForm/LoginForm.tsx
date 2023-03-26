import cn from "classnames";
import { useState } from "react";
import { Button, Card, Input } from "shared/ui";
import styles from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const mods = {};
  const [login, setLogin] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <Card className={cn(styles.root, className, mods)} gap={32}>
      <h2 className={styles.title}>Simple Hotel Check</h2>
      <Input label="Логин" value={login} onChange={(value) => setLogin(value)} />
      <Input
        type="password"
        label="Пароль"
        value={password}
        onChange={(value) => setPassword(value)}
      />
      <Button>Войти</Button>
    </Card>
  );
};
