import EventList from "../../components/events/EventList";
import Head from "next/head";
import { Fragment } from "react";
import SearchEvents from "../../components/events/events-search";
import { useRouter } from "next/router";

import { GetAllEvents } from "../../components/Helper/GetDataFormDB";
const AllEvents = (props) => {
  const { events } = props;
  const router = useRouter();
  const findEventHandler = (years, month) => {
    const fullPath = `/events/${years}/${month}`;
    router.push(fullPath);
  };

  return (
    <Fragment>
        <Head>
        <title>All Events</title>
        <meta name="description" content=" this is meta description" />
      </Head>
      <SearchEvents onSearch={findEventHandler} />
      <EventList item={events} />
    </Fragment>
  );
};

export const getStaticProps = async () => {
  const allEvents = await GetAllEvents();
  return {
    props: {
      events: allEvents,
    },
  };
};
export default AllEvents;
