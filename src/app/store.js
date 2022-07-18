import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "../features/task/tasksSlice";

export const store = configureStore({
  reducer: { task: taskReducer },
});
