import SingleTask from "./singleTask";
import classes from "./tasksList.module.css";

export default function TaskList(props) {
  const { items } = props;

  return (
    <ul className={classes.list}>
      {items?.map((task) => (
        <SingleTask key={task.id} id={task.id} title={task.title} creationDate={task.creationDate} endDate={task.endDate} />
      ))}
    </ul>
  );
}
