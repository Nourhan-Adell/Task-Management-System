import DateIcon from "../../icons/date-icon";
import CheckIcon from "../../icons/check-bagde-icon";
import LogisticsTaks from "./logisticsTask";
import classes from "./taskLogistics.module.css";

export default function TaskLogistics(props) {
  const { creationDate, endDate, status, priority } = props;

  const humanReadableCreationDate = new Date(creationDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const humanReadableendDate = new Date(endDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.logistics}>
      <ul className={classes.list}>
        <LogisticsTaks icon={DateIcon}>
          <time>Creation Date: {humanReadableCreationDate}</time>
        </LogisticsTaks>

        <LogisticsTaks icon={DateIcon}>
          <time>End Date: {humanReadableendDate}</time>
        </LogisticsTaks>

        <LogisticsTaks icon={CheckIcon}>status: {status}</LogisticsTaks>
      </ul>
    </section>
  );
}
