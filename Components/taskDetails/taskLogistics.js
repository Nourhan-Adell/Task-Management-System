import DateIcon from "../../icons/date-icon";
import CheckIcon from "../../icons/check-bagde-icon";
import LogisticsTaks from "./logisticsTask";
import classes from "./taskLogistics.module.css";

export default function TaskLogistics(props) {
  const { fromDate, toDate, status, priority } = props;

  const humanReadableFromDate = new Date(fromDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  const humanReadableToDate = new Date(toDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.logistics}>
      <ul className={classes.list}>
        <LogisticsTaks icon={DateIcon}>
          <time>From Date: {humanReadableFromDate}</time>
        </LogisticsTaks>

        <LogisticsTaks icon={DateIcon}>
          <time>To Date: {humanReadableToDate}</time>
        </LogisticsTaks>
        <LogisticsTaks icon={CheckIcon}>status: {status}</LogisticsTaks>
      </ul>
    </section>
  );
}
