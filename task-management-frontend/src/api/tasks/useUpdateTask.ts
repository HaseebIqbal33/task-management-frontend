import { useMutation } from '@tanstack/react-query';
import { taskClient } from './taskClient';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { queryClient } from '@/main';
import { ITask } from '@/types';
import { toast } from 'react-toastify';

function useUpdateTask() {
  const { item } = useLocalStorage('AUTH_TOKEN');

  taskClient.updateHeaders({ authorization: `Bearer ${item}` });
  return useMutation({
    mutationKey: ['Add new task'],
    mutationFn: (body: Partial<ITask>) =>
      taskClient.put(`/${body?._id}`, {
        ...body,
      }),

    onSuccess: () => {
      toast.success('Task updated successfully');
      queryClient.invalidateQueries({ queryKey: ['Tasks List'] });
    },
  });
}

export default useUpdateTask;
