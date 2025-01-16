import { useQuery } from '@tanstack/react-query';
import { taskClient } from './taskClient';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ITask } from '@/types';
import { useAuthContext } from '@/context/authContext/authContext';
import { IFilter } from '@/pages/home';

function useTasks(filters?: IFilter) {
  const { user } = useAuthContext();
  const { item } = useLocalStorage('AUTH_TOKEN');

  const apiFilters = {
    priority: filters?.priority ? filters?.priority : '',
    completed:
      filters && filters.completed ? JSON.stringify(filters.completed) : '',
  };

  if (item) {
    taskClient.updateHeaders({ authorization: `Bearer ${item}` });
  }

  return useQuery({
    queryKey: ['Tasks List', filters],
    queryFn: () =>
      taskClient.get<{ data: ITask[] }>('/', {
        userId: user?._id || '',
        ...apiFilters,
      }),
  });
}

export default useTasks;
