import {NavLink} from "react-router-dom";
import classes from "./EventsHeaderNav.module.css";

export default function EventsHeaderNav() {

    return (

        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {/*<li><NavLink to="/" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'orange'}}>Exit Events App</NavLink></li>
                    <li><NavLink to="/events-module" className={ ({isActive})=> isActive ? classes.active : undefined} end>Events Home</NavLink></li>
                    */}
                    <li><NavLink to="" className={ ({isActive})=> isActive ? classes.active : undefined}>All Events</NavLink></li>
                    <li><NavLink to="new" className={ ({isActive})=> isActive ? classes.active : undefined}>New Event</NavLink></li>
                </ul>
            </nav>
        </header>

    );
}