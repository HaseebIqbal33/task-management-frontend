import { useMutation } from '@tanstack/react-query';

import { taskClient } from './taskClient';
import { useAuthContext } from '@/context/authContext/authContext';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { queryClient } from '@/main';
import { toast } from 'react-toastify';

function useAddTask() {
  const { user } = useAuthContext();
  const { item } = useLocalStorage('AUTH_TOKEN');

  taskClient.updateHeaders({ authorization: `Bearer ${item}` });
  return useMutation({
    mutationKey: ['Add new task'],
    mutationFn: (body: object) =>
      taskClient.post('/', {
        ...body,
        userId: user?._id,
        createdAt: new Date().toDateString(),
      }),

    onSuccess: () => {
      toast.success('Task added successfully');
      queryClient.invalidateQueries({ queryKey: ['Tasks List'] });
    },
  });
}

export default useAddTask;
