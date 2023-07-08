import { Fragment } from "react";
import Button from "@/components/UI/button";
import { getFilteredTasks } from "../../data/testData";
import { useRouter } from "next/router";
import TaskList from "../../Components/tasks/tasksList";
import ResultsTitle from "../../Components/tasks/resultTitle";
import ErrorAlert from "../../Components/tasks/errorAlert";

export default function FilteredTasksPage() {
  const router = useRouter();

  const filterData = router.query.slug;

  console.log("Slug Page:" + filterData);

  if (!filterData) {
    return <p className="center">Loading...</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];

  //Transforming data to numbers
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid Filter, Please adjust your values!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/tasks">Sow All Taks</Button>
        </div>
      </Fragment>
    );
  }

  const filteredTasks = getFilteredTasks({ year: numYear, month: numMonth });

  if (!filteredTasks || filteredTasks.length == 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No tasks found for the chosen filter!</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/tasks">Sow All Tasks</Button>
        </div>
      </Fragment>
    );
  }

  const fromDate = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={fromDate} />
      <TaskList items={filteredTasks} />
    </Fragment>
  );
}
