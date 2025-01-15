import { useQuery } from '@tanstack/react-query';

import { taskClient } from './taskClient';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ITask } from '@/types';

function useTasks() {
  const { item } = useLocalStorage('AUTH_TOKEN');
  taskClient.updateHeaders({ authorization: `Bearer ${item}` });

  return useQuery({
    queryKey: ['Tasks List'],
    queryFn: () => taskClient.get<{ data: ITask[] }>('/'),
  });
}

export default useTasks;
