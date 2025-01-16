import { useQuery } from '@tanstack/react-query';
import { taskClient } from './taskClient';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ITask } from '@/types';
import { useAuthContext } from '@/context/authContext/authContext';
import { IFilter } from '@/components/taskList';

function useTasks(filters?: IFilter, pageSize = '5', currentPage = '1') {
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
    queryKey: ['Tasks List', filters, pageSize, currentPage],
    queryFn: () =>
      taskClient.get<{ data: { tasks: ITask[]; total: number } }>('/', {
        userId: user?._id || '',
        pageSize,
        currentPage,
        ...apiFilters,
      }),
  });
}

export default useTasks;
