import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: "1",
    title: "Task 1",
    description: "Task 1 Description",
    completed: false,
  },
  {
    id: "2",
    title: "Task 2",
    description: "Task 2 Description",
    completed: false,
  },
];

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addTask } = tasksSlice.actions;
export default tasksSlice.reducer;
