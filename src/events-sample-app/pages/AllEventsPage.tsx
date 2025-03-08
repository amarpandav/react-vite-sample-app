import {EVENT_TESTDATA} from "../../test-data/events-testdata.ts";
import {Link, Outlet} from "react-router-dom";

export default function AllEventsPage() {
    return (
        <>
            <h3>All Events</h3>
            <ul>
                {/*
                //doesn't work, getting error - TS2657: JSX expressions must have one parent element.
                EVENT_TESTDATA.map((event) => (
                    <li>{event.id}</li>
                    <li>{event.title}</li>

            )
                )
            */
                    EVENT_TESTDATA.map(event => <li key={event.id}><Link to={event.id}>{event.title}</Link></li>)
                }</ul>

            {
//You need to use the Outlet component to render the child routes of the current route.
// But in App.tsx
                <Outlet></Outlet>
            }

        </>
    );
}