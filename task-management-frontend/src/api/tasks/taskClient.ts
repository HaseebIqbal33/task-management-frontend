import { CONFIGS } from '@/configs';
import { Api } from '../Api';

export const taskClient = new Api({
  baseURL: `${CONFIGS.BACKEND.URL}/tasks`,
});
