import {Outlet, useNavigation} from "react-router-dom";

import classes from "./RootLayout.module.css";
import HomeHeaderNav from "../components/Header/HomeHeaderNav.tsx";

export default function HomeModuleLayout() {
    const navigation = useNavigation();

    return (
        <>
            <h2>Home App</h2>
            <HomeHeaderNav></HomeHeaderNav>
            <main className={classes.content}>
                {
                    //this will only work when we are loading data in App.tsx using loader()
                    navigation.state === 'loading' ? <p>Loading  in RootLayout...</p> : null
                }
                <Outlet></Outlet>
            </main>
        </>

    );
}