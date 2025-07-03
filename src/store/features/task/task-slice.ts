import type { TaskData } from "@/types/store/initial-state";
import { createSlice } from "@reduxjs/toolkit";

const initialState: TaskData[] = [
  {
    id: "01234124",
    title: "Initialize task",
    description: "Initialize description",
    dueDate: "2025-10-01",
    isCompleted: false,
    priority: "HIGH",
  },
];
const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {},
});

export default taskSlice.reducer;
