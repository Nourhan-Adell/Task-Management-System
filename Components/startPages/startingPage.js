import Button from "../UI/button";
import styles from "./startingPage.module.css";

export default function StartPage() {
  return (
    <section className={styles.starting}>
      <h1>Welcome To The Task Management System ^_^</h1>
      <Button link="/login">SignIn</Button>
      <Button link="/signup">SignUp</Button>
    </section>
  );
}
