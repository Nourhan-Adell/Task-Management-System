// import Link from "next/link";
import classess from "./singleTask.module.css";
import Button from "../UI/button";
import DateIcon from "../../icons/date-icon";
// import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

export default function EventItem(props) {
  const { id, title, fromDate, toDate } = props;
  const exploreLink = `/tasks/${id}`;

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
    <li className={classess.item}>
      {/* <img src={"/" + image} alt={title} /> */}
      <div className={classess.content}>
        <div className={classess.summary}>
          <h2>{title}</h2>
          <div className={classess.date}>
            <DateIcon />
            <time>{humanReadableFromDate}</time>
          </div>
          <div className={classess.date}>
            <DateIcon />
            <time>{humanReadableToDate}</time>
          </div>
        </div>
        <div className={classess.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={classess.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
