import {NavLink} from "react-router-dom";
import classes from "./EventsHeaderNav.module.css";

export default function EventsHeaderNav() {

    return (

        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to="/" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'orange'}}>Exit Events App</NavLink></li>
                    <li><NavLink to="/events/home" className={ ({isActive})=> isActive ? classes.active : undefined}>Events Home</NavLink></li>
                    <li><NavLink to="/events/events" className={ ({isActive})=> isActive ? classes.active : undefined}>Events</NavLink></li>
                </ul>
            </nav>
        </header>

    );
}