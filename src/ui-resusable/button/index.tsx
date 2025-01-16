import { Button as MuiButton } from '@mui/material';
import type { ButtonProps } from '@mui/material';
import { styles } from './styles';

const { defaultStyles } = styles;

function Button({ ...rest }: ButtonProps) {
  return (
    <MuiButton
      variant='contained'
      {...rest}
      sx={{ ...defaultStyles, ...rest.sx }}
    />
  );
}

export default Button;
