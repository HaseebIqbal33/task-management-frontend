import useDeleteTask from '@/api/tasks/useDeleteTask';
import useTasks from '@/api/tasks/useTasks';
import Header from '@/components/header';
import TaskForm from '@/components/taskform';
import TaskItem from '@/components/taskItem';
import { ITask } from '@/types';
import Button from '@/ui-resusable/button';
import MyDrawer from '@/ui-resusable/drawer';
import { Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import TaskFilters from '@/components/taskFilters';

export interface IFilter {
  priority: string;
  completed: boolean | undefined;
}

function HomePage() {
  const [filter, setFilter] = useState<IFilter | undefined>(undefined);
  const { data, isLoading } = useTasks(filter);
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

  const closeDrawer = () => {
    setOpen(false);
    setSelectedTask(null);
  };

  return (
    <Box>
      <Header />

      <Box display={'flex'} alignContent={'center'} justifyContent={'center'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          gap={2}
          width={{ xs: '100%', lg: '600px' }}
        >
          <Button size='small' sx={{ mt: 2 }} onClick={() => setOpen(true)}>
            Add a new task
          </Button>

          <TaskFilters filter={filter} setFilter={setFilter} />

          {isLoading && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
              <CircularProgress />
            </Box>
          )}
          {data?.data?.map((task) => (
            <TaskItem
              key={task._id}
              {...task}
              onSelectTask={selectedTaskHandler}
              onDeletTask={deleteTaskHandler}
            />
          ))}
        </Box>
      </Box>

      <MyDrawer open={open} onClose={closeDrawer}>
        <Box>
          <TaskForm task={selectedTask} onSubmit={closeDrawer} />
        </Box>
      </MyDrawer>
    </Box>
  );
}

export default HomePage;
