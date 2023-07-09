// import Link from "next/link";
import classess from "./singleTask.module.css";
import Button from "../UI/button";
import DateIcon from "../../icons/date-icon";
// import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../../icons/arrow-right-icon";

export default function EventItem(props) {
  const { id, title, creationDate, endDate } = props;
  const exploreLink = `/tasks/${id}`;

  const humanReadableCreationDate = new Date(creationDate).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const humanReadableEndDate = new Date(endDate).toLocaleDateString("en-US", {
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
            <time>{humanReadableCreationDate}</time>
          </div>
          <div className={classess.date}>
            <DateIcon />
            <time>{humanReadableEndDate}</time>
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
