import TaskContent from "../../Components/taskDetails/taskContent";
import TaskLogistics from "../../Components/taskDetails/taskLogistics";
import TaskSummary from "../../Components/taskDetails/taskSummary";
import ErrorAlert from "../../Components/tasks/errorAlert";

import { getTaskById } from "../../data/testData";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default function EventDetailsPage() {
  const router = useRouter();
  const taskId = router.query.id;
  const task = getTaskById(taskId);

  if (!task) {
    return (
      <ErrorAlert>
        <p>No Task Found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <TaskSummary title={task.title} />
      <TaskLogistics fromDate={task.fromDate} creationDate={task.creationDate} endDate={task.endDate} status={task.status} />
      <TaskContent>
        <p>{task.description}</p>
      </TaskContent>
    </Fragment>
  );
}
