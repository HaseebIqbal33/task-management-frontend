import { Api } from '../Api';

export const taskClient = new Api({
  baseURL: 'http://localhost:5000/api/v1/tasks',
});
