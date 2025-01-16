import { Box, Drawer, DrawerProps } from '@mui/material';
import { styles } from './styles';

function MyDrawer({ open, onClose, children, ...rest }: DrawerProps) {
  return (
    <Drawer
      open={open}
      onClose={onClose}
      sx={{ ...styles.defaultStyles, ...rest.sx }}
      anchor='right'
      {...rest}
    >
      <Box sx={{ width: { xs: '100%', lg: '500px' } }}>{children}</Box>
    </Drawer>
  );
}

export default MyDrawer;
