import Input from '@/ui-resusable/input';
import { Box, Checkbox, InputLabel, Typography } from '@mui/material';
import { Formik } from 'formik';
import PrioritySelector from './prioritySelector';
import Button from '@/ui-resusable/button';
import { validationSchema } from './validationSchema';
import useAddTask from '@/api/tasks/useAddTask';
import { ITask } from '@/types';
import useUpdateTask from '@/api/tasks/useUpdateTask';

const initialValues = {
  _id: '',
  title: '',
  description: '',
  priority: 'low',
  completed: false,
};

interface Props {
  task: ITask | null;
  onSubmit: () => void;
}

function TaskForm({ task, onSubmit }: Props) {
  const { mutate: addNewTask, isPending: isTaskBeingAdded } = useAddTask();
  const { mutate: updateTask, isPaused: isTaskBeingUpdated } = useUpdateTask();

  const buttonTitle = task ? 'Update Task' : 'Add Task';

  const handleSubmit = (values: ITask) => {
    try {
      if (!task) {
        delete values._id;
        addNewTask(values);
      } else {
        updateTask(values);
      }
      onSubmit();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Box mx={2}>
      <Typography variant='h4'>{task ? task.title : 'Add Task'}</Typography>
      <Formik
        key={task?._id}
        onSubmit={handleSubmit}
        initialValues={task ? task : initialValues}
        validationSchema={validationSchema}
      >
        {({ values, errors, handleChange, handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <Input
              name='title'
              placeholder='Title'
              value={values.title}
              onChange={handleChange}
              error={!!errors.title}
              errorMessage={errors.title}
            />
            <Input
              name='description'
              placeholder='Description'
              value={values.description}
              onChange={handleChange}
              error={!!errors.description}
              errorMessage={errors.description}
            />
            <PrioritySelector
              onSelectionChange={handleChange}
              value={values.priority}
            />
            <Box mt={2} display={'flex'} alignItems={'center'}>
              <Checkbox
                id='isCompleted'
                defaultChecked={values.completed}
                name='completed'
                onChange={handleChange}
              />
              <InputLabel htmlFor='isCompleted'>Completed</InputLabel>
            </Box>

            <Button
              disabled={
                !!Object.keys(errors).length ||
                isTaskBeingAdded ||
                isTaskBeingUpdated
              }
              type='submit'
              sx={{ mt: 5 }}
            >
              {buttonTitle}
            </Button>
          </form>
        )}
      </Formik>
    </Box>
  );
}

export default TaskForm;
