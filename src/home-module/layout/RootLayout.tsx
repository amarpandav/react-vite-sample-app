import reactImg from "../../assets/react.svg";
import {Outlet, useNavigation} from "react-router-dom";
import RootHeaderNav from "../header/RootHeaderNav.tsx";

import classes from "./Layout.module.css";
import Footer from "../footer/Footer.tsx";

export default function RootLayout() {
    const navigation = useNavigation();

    return (
        <>
            <h1><img src={reactImg} alt="title"/>React Sample App</h1>
            <RootHeaderNav></RootHeaderNav>
            <main className={classes.content}>
                {
                    //this will only work when we are loading data in App.tsx using loader()
                    navigation.state === 'loading' ? <p>Loading  in RootLayout...</p> : null
                }
                <Outlet></Outlet>
            </main>

            <Footer></Footer>
        </>

    );
}