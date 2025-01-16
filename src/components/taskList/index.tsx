import useTasks from '@/api/tasks/useTasks';
import { Box, CircularProgress } from '@mui/material';
import { useState } from 'react';
import TaskFilters from '../taskFilters';
import TaskItem from '../taskItem';
import { ITask } from '@/types';
import useDeleteTask from '@/api/tasks/useDeleteTask';
import Pagination from '../pagination';

export interface IFilter {
  priority: string;
  completed: boolean | undefined;
}

interface Props {
  setSelectedTask: (task: ITask) => void;
  setOpen: (open: boolean) => void;
}

function TaskList({ setSelectedTask, setOpen }: Props) {
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState<IFilter | undefined>(undefined);
  const { data, isLoading } = useTasks(filter, `${pageSize}`, `${currentPage}`);
  const { mutate: deleteTask } = useDeleteTask();

  const deleteTaskHandler = (id: string) => {
    deleteTask(id);
  };

  const selectedTaskHandler = (task: ITask) => {
    setSelectedTask(task);
    setOpen(true);
  };

  return (
    <Box>
      <TaskFilters filter={filter} setFilter={setFilter} />
      {isLoading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 5 }}>
          <CircularProgress />
        </Box>
      )}
      {data?.data?.tasks?.map((task) => (
        <TaskItem
          key={task._id}
          {...task}
          onSelectTask={selectedTaskHandler}
          onDeletTask={deleteTaskHandler}
        />
      ))}
      <Pagination
        total={data?.data?.total || 1}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageNumberChange={setCurrentPage}
        onPageSizeChange={setPageSize}
      />
    </Box>
  );
}

export default TaskList;
