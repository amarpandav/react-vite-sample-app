import reactImg from "../../assets/react.svg";
import {Outlet} from "react-router-dom";
import EventsHeaderNav from "../EventsHeader/EventsHeaderNav.tsx";

export default function EventsLayout() {

    return (
        <>
            <h1><img src={reactImg} alt="title"/>React Sample App/Events App</h1>
            <EventsHeaderNav></EventsHeaderNav>

            <Outlet></Outlet>

        </>

    );
}