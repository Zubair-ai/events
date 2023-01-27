const GetDataFromDB = async () => {
  const response = await fetch(
    "https://nexjs-37b54-default-rtdb.firebaseio.com/events.json"
  );
  const data = await response.json();
  const fetchedData = [];
  for (const key in data) {
    fetchedData.push({
      id: key,
      ...data[key],
    });
  }

  return fetchedData;
};

export const GetFeaturedEvents = async () => {
  const allEventsDB = await GetDataFromDB();
  const filterEventsData = allEventsDB.filter(
    (Data) => Data.isFeatured === true
  );
  return filterEventsData;
};

export const GetFeaturedEventsById = async (eventId) => {
  const allEventsDB = await GetDataFromDB();
  const filterEventsById = allEventsDB.find((Data) => Data.id === eventId);
  return filterEventsById;
};

export const GetAllEvents = async (eventId) => {
  const allEventsDB = await GetDataFromDB();
  return allEventsDB;
};
export const GetFilteredEvents= async(dateFilter)=>{
  const { year, month } = dateFilter;
  const AllEventsFormDB= await GetDataFromDB();
  let filteredEvents = AllEventsFormDB.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  return filteredEvents;
}

export default GetDataFromDB;
