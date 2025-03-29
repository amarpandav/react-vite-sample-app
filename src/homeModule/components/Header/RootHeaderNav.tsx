import {NavLink} from "react-router-dom";
import classes from './HeaderNav.module.css';
import NewsLetterSignup from "../NewsLetter/NewsLetterSignup.tsx";
export default function RootHeaderNav() {

    return (

        /*NavNavLink is replacement to NavLink
        * <header className={classes.header}>
                <nav>
                    <ul className={classes.list}>
                        <li> <NavLink to="/admin/home" style={{color: 'blue'}}>Enter Admin Mode</NavLink></li>
                        <li> <NavLink to="/home">Home</NavLink></li>
                        <li> <NavLink to="/sample1">Sample 1</NavLink></li>
                        <li> <NavLink to="/sample2">Sample 2: props vs state</NavLink></li>
                        <li><NavLink to="/sample3">Sample 3: passing children of type string</NavLink></li>
                        <li><NavLink to="/sample4">Sample 4: passing children of type HTML (using ReactNode)</NavLink></li>
                        <li><NavLink to="/sample5">Sample 5: Building a button component</NavLink></li>
                        <li><NavLink to="/sample6">Sample 6: Building a Dismissing Alert component</NavLink></li>
                        <li><NavLink to="/sample7">Sample 7: Making components reusable (CoreConcept component)</NavLink></li>
                        <li><NavLink to="/sample8">Sample 8: Setting Component Types dynamically</NavLink></li>
                    </ul>
                </nav>
            </header>
        * */
            <header className={classes.header}>
                <nav>
                    <ul className={classes.list}>
                        <li> <NavLink to="/" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'blue'}}>Home</NavLink></li>
                        <li> <NavLink to="/tic-tac-toe-module" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'blue'}}>TTT Game</NavLink></li>
                        <li> <NavLink to="/invest-module" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'blue'}}>Investment Calculator</NavLink></li>
                        <li> <NavLink to="/refs-and-portals-module" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'blue'}}>Refs & Portals</NavLink></li>

                        <li> <NavLink to="/admin-module" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'blue'}}>Admin App</NavLink></li>
                        <li> <NavLink to="/events-module/events" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'pink'}}>Events App</NavLink></li>
                        <li> <NavLink to="/events-module/events/events-with-suspense-await" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'pink'}}>Events App (Suspense and Await)</NavLink></li>
                        <li> <NavLink to="/newsletter" className={ ({isActive})=> isActive ? classes.active : undefined} style={{color: 'blue'}}>Newsletter</NavLink></li>
                    </ul>
                </nav>
                <div style = {{marginLeft: "200px"}}>
                    <NewsLetterSignup></NewsLetterSignup>
                </div>

            </header>

    );
}