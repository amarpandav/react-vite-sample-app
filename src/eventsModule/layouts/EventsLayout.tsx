import {Outlet, useNavigation} from "react-router-dom";
import EventsHeaderNav from "../components/Header/EventsHeaderNav.tsx";

export default function EventsLayout() {
    // useNavigation is a hook that returns the current navigation state
    const navigation = useNavigation();

    return (
        <>
            <h2>Events App</h2>
            <EventsHeaderNav></EventsHeaderNav>
            {/*<main>: no need as its coming from RootLayout*/}
                {
                    //this will only work when we are loading data in App.tsx using loader()
                    navigation.state === 'loading' ? <p>Loading in EventsLayout...</p> : null
                }
                <Outlet></Outlet>
            {/*</main>*/}


        </>

    );
}