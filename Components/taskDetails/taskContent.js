import classes from "./taskContent.module.css";

export default function TaskContent(props) {
  return <section className={classes.content}>{props.children}</section>;
}
