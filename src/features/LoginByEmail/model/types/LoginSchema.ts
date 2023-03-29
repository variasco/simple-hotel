export interface LoginData {
  email: string;
  password: string;
}

export interface LoginSchema {
  email: string;
  password: string;
  isLoading: boolean;
  error?: string;
  validateErrors?: ValidateLoginError[];
}

export enum ValidateLoginError {
  INCORRECT_EMAIL = "INCORRECT_EMAIL",
  INSUFFICIENT_PASSWORD_LENGTH = "INSUFFICIENT_PASSWORD_LENGTH",
  KIRILIC_SYMBOLS_IN_PASSWORD = "KIRILIC_SYMBOLS_IN_PASSWORD",
  NO_DATA = "NO_DATA",
  SERVER_ERROR = "SERVER_ERROR",
}
