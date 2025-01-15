import { Box, Typography } from '@mui/material';
import TaskPriority from './taskPriority';
import TaskCompleted from './taskCompleted';
import { IFilter } from '@/pages/home';

function TaskFilters({
  filter,
  setFilter,
}: {
  filter: IFilter | undefined;
  setFilter: React.Dispatch<React.SetStateAction<IFilter | undefined>>;
}) {
  return (
    <Box>
      <Typography>
        Filters:{' '}
        <span
          role='button'
          onClick={() => setFilter(undefined)}
          style={{
            fontSize: '10px',
            cursor: 'pointer',
            display: filter && Object.keys(filter).length ? 'inline' : 'none',
          }}
        >
          Clear Filters
        </span>
      </Typography>
      <Box display={'flex'} gap={2} alignItems={'center'}>
        <TaskPriority
          priority={filter?.priority || ''}
          onSelectPriority={(p) => {
            if (filter) setFilter({ ...filter, priority: p });
            else setFilter({ priority: p, completed: undefined });
          }}
        />
        <TaskCompleted
          checked={filter?.completed || false}
          onChcked={(val) => {
            if (filter) setFilter({ ...filter, completed: val });
            else setFilter({ completed: val, priority: '' });
          }}
        />
      </Box>
    </Box>
  );
}

export default TaskFilters;
