import { push } from "./arrays/push";
import { TaskList } from "./task";

interface Tasks {
  arrays: TaskList;
  strings: TaskList;
}

export const tasks: Tasks = { arrays: [push], strings: [] };
