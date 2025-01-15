import { useMutation } from '@tanstack/react-query';
import { taskClient } from './taskClient';
import { queryClient } from '@/main';

function useDeleteTask() {
  return useMutation({
    mutationKey: ['Delete Task'],
    mutationFn: (id: string) => taskClient.delete(`/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['Tasks List'] });
    },
  });
}

export default useDeleteTask;
