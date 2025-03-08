import {Outlet} from "react-router-dom";
import EventsHeaderNav from "../EventsHeader/EventsHeaderNav.tsx";

export default function EventsLayout() {

    return (
        <>
            <h2>Events Sample App</h2>
            <EventsHeaderNav></EventsHeaderNav>

            <main>
                <Outlet></Outlet>
            </main>


        </>

    );
}