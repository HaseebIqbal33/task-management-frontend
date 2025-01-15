import { Box, Typography } from '@mui/material';

import { styles } from './styles';
import DeleteIcon from '@mui/icons-material/Delete';
import { ITask } from '@/types';

const { container } = styles;

interface Props extends ITask {
  onSelectTask: (task: ITask) => void;
  onDeletTask: (id: string) => void;
}

function TaskItem({ onDeletTask, onSelectTask, ...rest }: Props) {
  const { title, description, _id } = rest;
  return (
    <Box sx={container} role='button' onClick={() => onSelectTask(rest)}>
      <Box>
        <Typography>{title}</Typography>
        <Typography variant='subtitle1'>{description}</Typography>
      </Box>
      <Box>
        <DeleteIcon
          sx={{ cursor: 'pointer' }}
          color='error'
          onClick={() => _id && onDeletTask(_id)}
        />
      </Box>
    </Box>
  );
}

export default TaskItem;
