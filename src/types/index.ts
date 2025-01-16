import { SxProps, Theme } from '@mui/material';

export type IStyles = Record<string, SxProps<Theme>>;

export interface ResponseT<T = null> {
  data: T | FullNull;
  success: boolean;
  error: boolean;
  message: string;
  status: number;
}

export type FullNull = undefined | null;

export interface ITask {
  _id?: string;
  title: string;
  description: string;
  priority: string;
  completed: boolean;
}
