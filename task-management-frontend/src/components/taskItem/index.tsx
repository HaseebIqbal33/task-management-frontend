import { Box, Typography } from '@mui/material';

import { getBackgroundColor, styles } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask } from '@/types';

const { container } = styles;

interface Props extends ITask {
  onSelectTask: (task: ITask) => void;
  onDeletTask: (id: string) => void;
}

function TaskItem({ onDeletTask, onSelectTask, ...rest }: Props) {
  const { title, description, _id, completed, priority } = rest;
  return (
    <Box
      sx={{ ...container, backgroundColor: getBackgroundColor(priority) }}
      role='button'
      onClick={() => onSelectTask(rest)}
    >
      <Box>
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
