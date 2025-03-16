import {NavLink} from "react-router-dom";
import classes from './HeaderNav.module.css';
export default function HomeHeaderNav() {

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
                        {/*looks like end keyword is not needed in latest React. As per trainer thats needed otherwise home nav is always active*/}
                        {/*
                        <li> <NavLink to="/" className={ ({isActive})=> isActive ? classes.active : undefined} end>Home without /home</NavLink></li>
                        <li> <NavLink to="/home" className={ ({isActive})=> isActive ? classes.active : undefined}>Home</NavLink></li>
                        */}
                        <li> <NavLink to="/sample1" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 1</NavLink></li>
                        <li> <NavLink to="/sample2" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 2: props vs state</NavLink></li>
                        <li><NavLink to="/sample3" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 3: passing children of type string</NavLink></li>
                        <li><NavLink to="/sample4" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 4: passing children of type HTML (using ReactNode)</NavLink></li>
                        <li><NavLink to="/sample5" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 5: Building a button component</NavLink></li>
                        <li><NavLink to="/sample6" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 6: Building a Dismissing Alert component</NavLink></li>
                        <li><NavLink to="/sample7" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 7: Making components reusable (CoreConcept component)</NavLink></li>
                        <li><NavLink to="/sample8" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 8: Setting Component Types dynamically</NavLink></li>
                        <li><NavLink to="/sample9" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 9: Navigate Programmatically</NavLink></li>
                        <li><NavLink to="/sample10/" className={ ({isActive})=> isActive ? classes.active : undefined}>Sample 10: Dynamic Routing - Product Page</NavLink></li>
                    </ul>
                </nav>
            </header>

    );
}