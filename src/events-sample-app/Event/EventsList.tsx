//import {EVENT_TESTDATA} from "../../test-data/events-testdata.ts";
import {Link, Outlet, /*useLoaderData*/} from "react-router-dom";
import {EventDto} from "./Event.model.ts";
import classes from './EventsList.module.css';

interface Props {
    events: EventDto[];
}
export default function EventsList({events}: Props ) {

    //instead of getting events as props we can also load it from leader if we are using loader function in App.tsx
    //const events = useLoaderData(); //coming from loader function from App.tst

    return (
        <div className={classes.events}>
            <h3>All Events</h3>
            <ul className={classes.list}>
                {

                    events.map((event) => (
                            <li key={event.eventId.id} className={classes.item}>
                                <Link to={event.eventId.id}>
                                    <img src={event.image} alt={event.title} />
                                    <div className={classes.content}>
                                        <h2>{event.title}</h2>
                                        {/*<time>{event.eventDate ? event.eventDate.toISOString().split('T')[0] : 'No Date'}</time>*/}
                                        <time>{event.eventDate ? event.eventDate.toLocaleDateString() : 'No Date'}</time>
                                    </div>
                                </Link>
                            </li>

            )
                )

                    //events.map(event => <li key={event.eventId.id}><Link to={event.eventId.id}>{event.title}</Link></li>)
                }</ul>

            {
//You need to use the Outlet component to render the child routes of the current route.
// But in App.tsx
                <Outlet></Outlet>
            }

        </div>
    );
}