import { useQuery } from '@tanstack/react-query';

import { taskClient } from './taskClient';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { ITask } from '@/types';
import { useAuthContext } from '@/context/authContext/authContext';

function useTasks() {
  const { user } = useAuthContext();
  const { item } = useLocalStorage('AUTH_TOKEN');
  taskClient.updateHeaders({ authorization: `Bearer ${item}` });

  return useQuery({
    queryKey: ['Tasks List'],
    queryFn: () =>
      taskClient.get<{ data: ITask[] }>('/', { userId: user?._id || '' }),
  });
}

export default useTasks;
