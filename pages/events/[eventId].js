import EventContent from "../../components/event-detail/event-detail/event-content";
import EventLogistics from "../../components/event-detail/event-detail/event-logistics";
import EventSummary from "../../components/event-detail/event-detail/event-summary";
import { Fragment } from "react";
import ErrorAlert from "../../components/UI/error-alert/error-alert/error-alert";
import Button from "../../components/UI/Button";
import Head from "next/head";
import { GetFeaturedEvents, GetFeaturedEventsById } from "../../components/Helper/GetDataFormDB";
import Comments from "../../components/Input/comments";
const EventDetail = (props) => {
  const{ event} = props;

  if (!event) {
    return <Fragment>
    <ErrorAlert><p>No events found</p></ErrorAlert>
    <div className="center">
       <Button link={"/events"}>Show All Events</Button>
    </div>
</Fragment>
  }
  return (
    <Fragment>
      <Head>
        <title>Event Detail</title>
        <meta name="description" content=" this is meta description" />
      </Head>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
      <Comments eventId={event.id}/>
    </Fragment>
  );
};

export const getStaticProps= async (context)=>{
  const {params}=context;
  const EventId=params.eventId;
  const event= await GetFeaturedEventsById(EventId)
  return{
    props:{
      event:event
    },
    revalidate:30
  }
}

export const getStaticPaths= async()=>{
  const AllEvents= await GetFeaturedEvents();
  
    const paramsWithId=AllEvents.map(event=>({params:{eventId:event.id}}))

  return{
    paths:paramsWithId,
    fallback:true
  }
  
}

export default EventDetail;
