import { IStyles } from '@/types';

export const styles = {
  defaultStyles: {
    font: '600 16px/1.3 Lato, Helvetica Neue, Arial, sans-serif',
    width: '100%',
    borderRadius: '3px',
    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  },
} satisfies IStyles;
