
import EventsList from "../Event/EventsList.tsx";
// {useLoaderData} from "react-router-dom";
//import {useLoaderData,} from "react-router-dom";
import {useEffect, useState} from "react";
import {EventDto} from "../Event/Event.model.ts";

//import EventsList from '../components/EventsList';

//Option 1 : incase you want load the data before visiting EventsPage then use loader function in App.tsx
//that data will be available in useLoaderData() function in this page and also in all child components used inside this page for e.g EventsList.
/*export default function EventsPage() {
    const events = useLoaderData(); //coming from loader function from App.tst
    return (
        <EventsList events={events}/>
    );
}*/

//Option 2: manually displaying loading....message.
export default function EventsPage() {
    const [isLoading, setIsLoading] = useState(false);
    const [fetchedEvents, setFetchedEvents] = useState<EventDto[]>([]);
    //const [error, setError] = useState("");

    useEffect(() => {
        async function fetchEvents() {
            setIsLoading(true);
            const response = await fetch('http://localhost:8080/events');

            if (!response.ok) {
                //setError('Fetching events failed.');
                //throw new Error('Fetching events failed.');
                //throw new Response(JSON.stringify({message: 'Fetching events failed.', status: response.status}));

                /*When using useEffect(), throwing an error like throw new Response(...) won't trigger React Router's error handling because it's not part of a loader. Instead, you need to handle the error inside your component and manually navigate to the error page.*/
                throw new Response(JSON.stringify({message: 'Fetching events failed.'}), {status: 500});
                //return Response.json({message: 'Fetching events failed.'}, {status: 500});
            } else {
                const resData = await response.json();
                const eventsJson = resData.events;
                const eventDtos = EventDto.parseJsonArray(eventsJson);
                /*
                events.map((event   ) => {
                    if(event.eventDate) {
                        event.eventDate = DateUtils.parseISODate(event.eventDate);
                    }

                } );*/

                setFetchedEvents(eventDtos);
            }
            setIsLoading(false);
        }

        fetchEvents();
    }, []);
    return (
        <>
            <div style={{textAlign: 'center'}}>
                {isLoading && <p>Loading...</p>}
                {/*error && <p>{error}</p>*/}
            </div>
            {!isLoading && fetchedEvents && <EventsList events={fetchedEvents}/>}
        </>
    );
}

/*export async function eventsLoader() {
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        throw new Error('Fetching events failed.');
    } else {
        const resData = await response.json();
        const events = resData.events;
        events.map((event) => {
            if(event.eventDate) {
                event.eventDate = convertToDate(event.eventDate);
            }

        } );
        return events;
    }
}*/