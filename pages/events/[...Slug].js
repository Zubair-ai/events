import EventList from "../../components/events/EventList";
import { Fragment } from "react";
import ResultsTitle from "../../components/events/results-title/results-title/results-title";
import Button from "../../components/UI/Button";
import ErrorAlert from "../../components/UI/error-alert/error-alert/error-alert";
import { GetFilteredEvents } from "../../components/Helper/GetDataFormDB";
import Head from "next/head";
const FilteredEvent = (props) => {
  
  const {filteredData,numMonth,numYear,filteredEvents} = props;
  
  if (!filteredData) {
    return <p className="center">Loading</p>;
  }

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth > 12 ||
    numMonth < 1 ||
    numYear < 2021
  ){
    return <Fragment>
    <ErrorAlert><p>Please enter vaild filer value</p></ErrorAlert>
    <div className="center">
       <Button link={"/events"}>Show All Events</Button>
    </div>
</Fragment>
  }

  if(!filteredEvents || filteredEvents.length===0){
    return <Fragment>
        <ErrorAlert> <p>No Event Found agaist your filter</p></ErrorAlert>
         <div className="center">
            <Button link={"/events"}>Show All Events</Button>
         </div>
    </Fragment>
  }
  const date=new Date(numYear,numMonth-1)
    return (
      <Fragment>
        <Head>
        <title>Filtered Events</title>
        <meta name="description" content=" this is meta description" />
      </Head>
        <ResultsTitle date={date}/>
       <EventList item={filteredEvents}/>
      </Fragment>
    );
};

export const getServerSideProps= async (context)=>{
  const {params}=context;
  const filteredDateFormpath=params.Slug;

  const filteredYear = filteredDateFormpath[0];
  const filteredMonth = filteredDateFormpath[1];

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  const filteredEvents= await GetFilteredEvents({
    year: numYear,
    month:numMonth
  });

  return{
    props:{
      filteredEvents:filteredEvents,
      numYear:numYear,
      numMonth:numMonth,
      filteredData:filteredDateFormpath
    }
  }
}

export default FilteredEvent;
