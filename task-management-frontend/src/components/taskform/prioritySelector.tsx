import { Select, MenuItem, SelectChangeEvent } from '@mui/material';

interface Props {
  value: string;
  onSelectionChange: (value: SelectChangeEvent<string>) => void;
}

function PrioritySelector({ value, onSelectionChange }: Props) {
  return (
    <Select
      fullWidth
      value={value}
      name='priority'
      onChange={onSelectionChange}
    >
      <MenuItem value={'low'}>Low</MenuItem>
      <MenuItem value={'medium'}>Medium</MenuItem>
      <MenuItem value={'high'}>High</MenuItem>
    </Select>
  );
}

export default PrioritySelector;
