import { LoginData, ValidateLoginError } from "../types/LoginSchema";

const emailRegExp =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

export function validateProfileData(loginData?: LoginData) {
  if (!loginData) {
    return [ValidateLoginError.NO_DATA];
  }

  const { email, password } = loginData;

  const errors: ValidateLoginError[] = [];

  if (!emailRegExp.test(email)) {
    errors.push(ValidateLoginError.INCORRECT_EMAIL);
  }

  if (password.search(/[а-я]|ё/iu) !== -1) {
    errors.push(ValidateLoginError.KIRILIC_SYMBOLS_IN_PASSWORD);
  }

  if (password.length < 8) {
    errors.push(ValidateLoginError.INSUFFICIENT_PASSWORD_LENGTH);
  }

  return errors;
}
