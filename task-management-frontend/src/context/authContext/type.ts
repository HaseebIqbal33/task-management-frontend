export interface IAuth {
  isAuthenticated: boolean;
  login: (token: string, user: IUser) => void;
  logout: () => void;
  user: IUser | null;
}

export interface IUser {
  _id: string;
  name: string;
  email: string;
}
