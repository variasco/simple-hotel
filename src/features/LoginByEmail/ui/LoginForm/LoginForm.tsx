import cn from "classnames";
import { getUserAuthData } from "entities/User";
import { useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { DynamicModuleLoader, ReducersList } from "shared/components/DynamicModuleLoader";
import { useAppDispatch } from "shared/hooks/useAppDispatch";
import { Button, Card, Input } from "shared/ui";
import { getLoginEmail, getLoginError, getLoginPassword } from "../../model/selectors/getLoginData";
import { getLoginValidateErrors } from "../../model/selectors/getLoginValidateErrors";
import { loginByEmail } from "../../model/services/loginByEmail";
import { loginActions, loginReducer } from "../../model/slice/LoginSlice";
import { ValidateLoginError } from "../../model/types/LoginSchema";
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

  const validateErrors = useSelector(getLoginValidateErrors);

  const validateErrorsMapper = {
    [ValidateLoginError.SERVER_ERROR]: "Ошибка сервера",
    [ValidateLoginError.NO_DATA]: "Поле не должно быть пустым",
    [ValidateLoginError.INCORRECT_EMAIL]: "Некорректный email",
    [ValidateLoginError.INSUFFICIENT_PASSWORD_LENGTH]: "Минимальная длина пароля 8 символов",
    [ValidateLoginError.KIRILIC_SYMBOLS_IN_PASSWORD]: "В пароле не должно быть символов кириллицы",
  };

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

  const loginError = () => {
    if (validateErrors?.length && validateErrors.includes(ValidateLoginError.NO_DATA)) {
      return validateErrorsMapper.NO_DATA;
    }
    if (validateErrors?.length && validateErrors.includes(ValidateLoginError.INCORRECT_EMAIL)) {
      return validateErrorsMapper.INCORRECT_EMAIL;
    }
    if (validateErrors?.length && validateErrors.includes(ValidateLoginError.SERVER_ERROR)) {
      return validateErrorsMapper.SERVER_ERROR;
    }
  };

  const passwordError = () => {
    if (validateErrors?.length && validateErrors.includes(ValidateLoginError.NO_DATA)) {
      return validateErrorsMapper.NO_DATA;
    }
    if (
      validateErrors?.length &&
      validateErrors.includes(ValidateLoginError.INSUFFICIENT_PASSWORD_LENGTH)
    ) {
      return validateErrorsMapper.INSUFFICIENT_PASSWORD_LENGTH;
    }
    if (
      validateErrors?.length &&
      validateErrors.includes(ValidateLoginError.KIRILIC_SYMBOLS_IN_PASSWORD)
    ) {
      return validateErrorsMapper.KIRILIC_SYMBOLS_IN_PASSWORD;
    }
    if (validateErrors?.length && validateErrors.includes(ValidateLoginError.SERVER_ERROR)) {
      return validateErrorsMapper.SERVER_ERROR;
    }
  };

  return (
    <DynamicModuleLoader reducers={initialReducers} removeOnUnmount>
      <Card className={cn(styles.root, className, mods)} gap={32}>
        <h2 className={styles.title}>Simple Hotel Check</h2>
        <Input
          label="Логин"
          value={email}
          error={loginError()}
          onChange={(value) => onChangeEmail(value)}
        />
        <Input
          type="password"
          label="Пароль"
          value={password}
          error={passwordError()}
          onChange={(value) => onChangePassword(value)}
        />
        {error && <div className={styles.error}>{error}</div>}
        <Button onClick={onLoginClick}>Войти</Button>
      </Card>
    </DynamicModuleLoader>
  );
};
