import { Box, Checkbox, InputLabel } from '@mui/material';

interface Props {
  checked: boolean;
  onChcked: (checked: boolean) => void;
}

function TaskStatus({ checked, onChcked }: Props) {
  return (
    <Box>
      <Box mt={2} display={'flex'} alignItems={'center'}>
        <Checkbox
          key={JSON.stringify(checked)}
          id='isCompleted1'
          defaultChecked={checked}
          name='completed'
          onChange={() => {
            onChcked(!checked);
          }}
        />
        <InputLabel htmlFor='isCompleted1'>Completed</InputLabel>
      </Box>
    </Box>
  );
}

export default TaskStatus;
