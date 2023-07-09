import { Fragment } from "react";
import TaskList from "../Components/tasks/tasksList";
import { getAllTasks } from "../data/testData";

export default function ProfilePage() {
  const tasks = getAllTasks();

  return (
    <Fragment>
      <h1>All Tasks</h1>
      <TaskList items={tasks} />
    </Fragment>
  );
}
