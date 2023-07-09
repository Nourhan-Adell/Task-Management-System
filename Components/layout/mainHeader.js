import Link from "next/link";
import classes from "./mainHeader.module.css";

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">TMS</Link>
        <nav className={classes.navigation}>
          <ul>
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            {/* <button>Logout</button> */}
          </ul>
        </nav>
      </div>
    </header>
  );
}
