import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasks: [
    { id: 1, title: 'Complete Project', status: 'completed' },
    { id: 2, title: 'Review Code', status: 'pending' },
    { id: 3, title: 'Deploy App', status: 'pending' },
  ],
  completedCount: 1,
  totalTasks: 3,
};

const analyticsSlice = createSlice({
  name: 'analytics',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({
        id: Math.max(...state.tasks.map(t => t.id), 0) + 1,
        title: action.payload,
        status: 'pending',
      });
      state.totalTasks += 1;
    },

    toggleTask: (state, action) => {
      const task = state.tasks.find(t => t.id === action.payload);
      if (task) {
        if (task.status === 'pending') {
          task.status = 'completed';
          state.completedCount += 1;
        } else {
          task.status = 'pending';
          state.completedCount -= 1;
        }
      }
    },

    deleteTask: (state, action) => {
      const taskIndex = state.tasks.findIndex(t => t.id === action.payload);
      if (taskIndex !== -1) {
        if (state.tasks[taskIndex].status === 'completed') {
          state.completedCount -= 1;
        }
        state.tasks.splice(taskIndex, 1);
        state.totalTasks -= 1;
      }
    },
  },
});

export const { addTask, toggleTask, deleteTask } = analyticsSlice.actions;
export default analyticsSlice.reducer;
