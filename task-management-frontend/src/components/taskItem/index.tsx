import { Box, Checkbox, Typography } from '@mui/material';

import { getBackgroundColor, styles } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask } from '@/types';
import useUpdateTask from '@/api/tasks/useUpdateTask';

const { container } = styles;

interface Props extends ITask {
  onSelectTask: (task: ITask) => void;
  onDeletTask: (id: string) => void;
}

function TaskItem({ onDeletTask, onSelectTask, ...rest }: Props) {
  const { title, description, _id, completed, priority } = rest;
  const { mutate: updateTask } = useUpdateTask();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    updateTask({ ...rest, completed: !completed });
  };
  return (
    <Box sx={{ ...container, backgroundColor: getBackgroundColor(priority) }}>
      <Box display={'flex'} alignItems={'center'} gap={2} flex={1}>
        <Checkbox
          key={JSON.stringify(completed)}
          defaultChecked={completed}
          name='completed'
          onChange={handleChange}
        />
        <Box width={'100%'} role='button' onClick={() => onSelectTask(rest)}>
          <Typography sx={{ textDecoration: completed ? 'line-through' : '' }}>
            {title}
          </Typography>
          <Typography
            variant='subtitle1'
            sx={{ textDecoration: completed ? 'line-through' : '' }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
      <Box>
        <DeleteIcon
          sx={{ cursor: 'pointer' }}
          color='error'
          onClick={(e) => {
            e.stopPropagation();
            if (_id) onDeletTask(_id);
          }}
        />
      </Box>
    </Box>
  );
}

export default TaskItem;
