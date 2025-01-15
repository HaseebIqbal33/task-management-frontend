import { IStyles } from '@/types';

export const styles = {
  defaultStyles: {
    borderRadius: '5px',
    boxShadow: '#0350b4 0px 10px 40px -10px !important',
    padding: '14.44px 34.24px',
    '&:disabled': { boxShadow: 'none !important' },
  },
} satisfies IStyles;
