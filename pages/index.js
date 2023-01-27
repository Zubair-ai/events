import Head from "next/head";
import { GetFeaturedEvents } from "../components/Helper/GetDataFormDB";
import EventList from "../components/events/EventList";
import NewsletterRegistration from ".././components/Input/newsletter-registration";
const HomePage = (props) => {
  const {Events}=props
  
  return (
    <div>
      <Head>
        <title>NextJs Events</title>
        <meta name="description" content=" this is meta description" />
      </Head>
      <NewsletterRegistration/>
      <EventList item={Events} />
    </div>
  );
};
export default HomePage;

export const getStaticProps=async ()=>{
  const DataFromDataBase= await GetFeaturedEvents();
  
  return{
    props:{
      Events:DataFromDataBase
    },
    revalidate:1800
  }

};

