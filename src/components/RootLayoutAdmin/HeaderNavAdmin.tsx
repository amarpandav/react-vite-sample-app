import {NavLink} from "react-router-dom";
import classes from "./HeaderNavAdmin.module.css";

export default function HeaderNavAdmin() {

    return (

        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li><NavLink to="/" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'orange'}}>Exit Admin Mode</NavLink></li>
                    <li><NavLink to="/admin/home" className={ ({isActive})=> isActive ? classes.active : undefined}>Admin Home</NavLink></li>
                    <li><NavLink to="/admin/systemSettings" className={ ({isActive})=> isActive ? classes.active : undefined}>System Settings</NavLink></li>
                </ul>
            </nav>
        </header>

    );
}