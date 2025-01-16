import { CONFIGS } from '@/configs';
import { Api } from '../Api';

export const authClient = new Api({
  baseURL: `${CONFIGS.BACKEND.URL}/auth`,
});
