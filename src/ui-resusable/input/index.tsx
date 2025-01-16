import { Box, TextField, Typography } from '@mui/material';
import type { TextFieldProps } from '@mui/material';
import { styles } from './styles';

const { defaultStyles } = styles;

type Props = TextFieldProps & {
  errorMessage?: string;
  containerProps?: React.ComponentProps<typeof Box>;
};

function Input({ errorMessage, containerProps, ...rest }: Props) {
  return (
    <Box {...containerProps} sx={{ marginY: '20px', ...containerProps?.sx }}>
      <TextField
        {...rest}
        sx={{
          ...defaultStyles,
          ...rest.sx,
        }}
      />
      <Box
        sx={{
          textWrap: 'wrap',
          maxWidth: '450px',
        }}
      >
        {rest.error && errorMessage && (
          <Typography
            color={'red'}
            variant='caption'
            sx={{ maxWidth: '350px' }}
          >
            {errorMessage}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default Input;
