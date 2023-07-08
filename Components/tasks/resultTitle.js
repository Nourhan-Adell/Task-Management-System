import Button from "../UI/button";
import classes from "./resultTitle.module.css";

export default function ResultsTitle(props) {
  const { date } = props;
  console.log("resultTitle file:" + date);
  const humanReadableFromDate = new Date(date).toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
  });

  return (
    <section className={classes.title}>
      <h1 className={classes.mainTitle}>Tasks in {humanReadableFromDate}</h1>
      <Button link="/events">Show all Tasks</Button>
    </section>
  );
}
