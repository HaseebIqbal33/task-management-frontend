import { Api } from '../Api';

export const authClient = new Api({
  baseURL: 'http://localhost:5000/api/v1/auth',
});
