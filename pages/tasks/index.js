import { Fragment } from "react";
import { useRouter } from "next/router";
import SearchTasks from "../../Components/tasks/filteredTask";
import { getAllTasks } from "../../data/testData";
import TasksList from "../../Components/tasks/tasksList";
import LoginForm from "../../Components/startPages/loginForm";

export default function ALLTasksPage() {
  const tasks = getAllTasks();
  const router = useRouter();

  function findTasks(year, month) {
    const fullPath = `/tasks/${year}/${month}`;
    router.push(fullPath);

    console.log("Index Page");
  }
  return (
    <Fragment>
      <LoginForm />
      <SearchTasks onSearch={findTasks} />
      <TasksList items={tasks} />
    </Fragment>
  );
}
