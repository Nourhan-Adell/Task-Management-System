import Link from "next/link";
import classes from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">TMS</Link>
        <nav className={classes.navigation}>
          <ul>
            <Link href="/events">Browes All Tasks</Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}
