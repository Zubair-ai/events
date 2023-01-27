
import classes from "./EventItem.module.css";
import AddressIcon from "../icons/icons/address-icon";
import ArrowRightIcon from "../icons/icons/arrow-right-icon";
import DateIcon from "../icons/icons/date-icon";
import Button from "../UI/Button";
import Image from "next/image";
const EventItem = (props) => {
  const { title, image, date, location, id } = props;
  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");
  const exploreLink = `/events/${id}`;

  return (
    <li className={classes.item}>
      <Image src={"/" + image} alt="" width={250} height={160} />
      <div className={classes.content}>
        <div className={classes.summary}>
          <div>
            {" "}
            <h2>{title}</h2>
          </div>
          <div className={classes.date}>
           <DateIcon/>
            <time>{humanReadableDate}</time>
          </div>
          <div className={classes.address}>
            <AddressIcon/>
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={classes.actions}>
          <Button  link={exploreLink}>
            <span>Explore Event</span>
            <span className={classes.icon}><ArrowRightIcon/></span>
            </Button>
        </div>
      </div>
    </li>  
  );
};

export default EventItem;
