import { useMutation } from '@tanstack/react-query';
import { taskClient } from './taskClient';
import { queryClient } from '@/main';
import { toast } from 'react-toastify';
import { useAuthContext } from '@/context/authContext/authContext';

function useDeleteTask() {
  const { user } = useAuthContext();
  return useMutation({
    mutationKey: ['Delete Task'],
    mutationFn: (id: string) =>
      taskClient.delete(`/${id}`, { userId: user?._id || '' }),
    onSuccess: () => {
      toast.success('Task deleted successfully');
      queryClient.invalidateQueries({ queryKey: ['Tasks List'] });
    },
  });
}

export default useDeleteTask;
