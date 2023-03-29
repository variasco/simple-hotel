import cn from "classnames";
import { getUserAuthData } from "entities/User";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DynamicModuleLoader, ReducersList } from "shared/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Button, Card, Input } from "shared/ui";
import {
  getLoginEmail,
  getLoginError,
  getLoginLoading,
  getLoginPassword,
} from "../../model/selectors/getLoginData";
import { loginByEmail } from "../../model/services/loginByEmail";
import { loginActions, loginReducer } from "../../model/slice/LoginSlice";
import styles from "./LoginForm.module.scss";

export interface LoginFormProps {
  className?: string;
}

const initialReducers: ReducersList = {
  login: loginReducer,
};

export const LoginForm = (props: LoginFormProps) => {
  const { className } = props;
  const mods = {};

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authData = useSelector(getUserAuthData);
  const email = useSelector(getLoginEmail);
  const password = useSelector(getLoginPassword);
  const error = useSelector(getLoginError);
  const isLoading = useSelector(getLoginLoading);

  const onChangeEmail = useCallback(
    (value: string) => {
      dispatch(loginActions.setEmail(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(async () => {
    dispatch(loginByEmail({ email, password }));
  }, [dispatch, password, email]);

  useEffect(() => {
    if (authData) {
      navigate("/");
    }
  }, [authData]);

  return (
    <DynamicModuleLoader reducers={initialReducers} removeOnUnmount>
      <Card className={cn(styles.root, className, mods)} gap={32}>
        <h2 className={styles.title}>Simple Hotel Check</h2>
        <Input label="Логин" value={email} onChange={(value) => onChangeEmail(value)} />
        <Input
          type="password"
          label="Пароль"
          value={password}
          onChange={(value) => onChangePassword(value)}
        />
        {error && <div className={styles.error}>{error}</div>}
        <Button onClick={onLoginClick}>Войти</Button>
      </Card>
    </DynamicModuleLoader>
  );
};
