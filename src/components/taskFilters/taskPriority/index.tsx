import { Box, Typography } from '@mui/material';
import React from 'react';

const PRIORITIES = ['high', 'medium', 'low'];

interface Props {
  priority: string;
  onSelectPriority: (priority: string) => void;
}

function TaskPriority({ priority, onSelectPriority }: Props) {
  return (
    <Box display={'flex'} gap={1}>
      {PRIORITIES.map((p) => (
        <Box
          key={p}
          role='button'
          onClick={() => {
            onSelectPriority(p);
          }}
        >
          <TaskPriorityItem title={p} selected={priority === p} />
        </Box>
      ))}
    </Box>
  );
}

export default TaskPriority;

const TaskPriorityItem = ({
  title,
  selected,
}: {
  title: string;
  selected: boolean;
}) => (
  <Typography
    sx={{
      border: '1px solid #f1f3f5',
      borderRadius: '10px',
      p: 1,
      cursor: 'pointer',
      backgroundColor: selected ? '#00A36C' : '#f1f3f5',
    }}
  >
    {title}
  </Typography>
);
