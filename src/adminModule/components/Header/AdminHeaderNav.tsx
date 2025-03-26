import {NavLink} from "react-router-dom";
import classes from "./AdminHeaderNav.module.css";

export default function AdminHeaderNav() {

    return (

        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    {/*<li><NavLink to="/" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'orange'}}>Exit Admin Mode</NavLink></li>*/}
                    <li><NavLink to="home" className={ ({isActive})=> isActive ? classes.active : undefined}>Admin Home</NavLink></li>
                    <li><NavLink to="systemSettings" className={ ({isActive})=> isActive ? classes.active : undefined}>System Settings</NavLink></li>
                </ul>
            </nav>
        </header>

    );
}