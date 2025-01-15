import useDeleteTask from '@/api/tasks/useDeleteTask';
import useTasks from '@/api/tasks/useTasks';
import TaskForm from '@/components/taskform';
import TaskItem from '@/components/taskItem';
import { ITask } from '@/types';
import Button from '@/ui-resusable/button';
import MyDrawer from '@/ui-resusable/drawer';
import { Box } from '@mui/material';
import { useState } from 'react';

function HomePage() {
  const { data } = useTasks();
  const { mutate: deleteTask } = useDeleteTask();
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

  const deleteTaskHandler = (id: string) => {
    deleteTask(id);
  };

  const selectedTaskHandler = (task: ITask) => {
    setSelectedTask(task);
    setOpen(true);
  };

  return (
    <Box>
      <Button onClick={() => setOpen(true)}>Add a new task</Button>

      <MyDrawer open={open} onClose={() => setOpen(false)}>
        <Box>
          <TaskForm task={selectedTask} />
        </Box>
      </MyDrawer>
      <Box display={'flex'} flexDirection={'column'} gap={2}>
        {data?.data?.map((task) => (
          <TaskItem
            {...task}
            onSelectTask={selectedTaskHandler}
            onDeletTask={deleteTaskHandler}
          />
        ))}
      </Box>
    </Box>
  );
}

export default HomePage;
