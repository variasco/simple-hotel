export interface User {
  email: string;
}

export interface UserSchema {
  authData?: User;
  _inited?: boolean;
}
