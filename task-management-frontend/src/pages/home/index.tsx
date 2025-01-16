import Header from '@/components/header';
import TaskForm from '@/components/taskform';
import TaskList from '@/components/taskList';
import { ITask } from '@/types';
import Button from '@/ui-resusable/button';
import MyDrawer from '@/ui-resusable/drawer';
import { Box } from '@mui/material';
import { useState } from 'react';

function HomePage() {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState<ITask | null>(null);

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
          <TaskList setSelectedTask={setSelectedTask} setOpen={setOpen} />
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
