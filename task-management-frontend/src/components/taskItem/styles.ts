import { IStyles } from '@/types';

export const styles = {
  container: {
    border: '1px solid #f1f3f5',
    borderRadius: '6px',
    minHeight: '40px',
    p: 2,
    display: 'flex',
    justifyContent: 'space-between',
  },
} satisfies IStyles;

export const getBackgroundColor = (priority: string) => {
  switch (priority) {
    case 'low':
      return '#f1f3f5';
    case 'medium':
      return '#C0C0C0';
    case 'high':
      return '#f8d7da';
    default:
      return '#f1f3f5';
  }
};
