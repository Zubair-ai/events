import EventItem from "./EventItems";
import classes from "./EventList.module.css";
const EventList = (props) => {
  const { item } = props;
  return (
    <ul className={classes.list}>
      {item.map((event) => (
        <EventItem
          key={event.id}
          id={event.id}
          title={event.title}
          location={event.location}
          date={event.date}
          image={event.image}
        />
      ))}
    </ul>
  );
};
export default EventList;
