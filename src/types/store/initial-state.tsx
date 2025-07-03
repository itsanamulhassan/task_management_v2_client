export type TaskData = {
  id: string;
  title: string;
  description: string;
  dueDate: string;
  isCompleted: boolean;
  priority: "HIGH" | "LOW" | "MEDIUM";
};
