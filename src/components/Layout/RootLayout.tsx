import reactImg from "../../assets/react.svg";
import {Outlet} from "react-router-dom";
import HeaderNav from "../Header/HeaderNav.tsx";

import classes from "./RootLayout.module.css";
import Footer from "../Footer/Footer.tsx";

export default function RootLayout() {

    return (
        <>
            <h1><img src={reactImg} alt="title"/>React Sample App</h1>
            <HeaderNav></HeaderNav>
            <main className={classes.content}>
                <Outlet></Outlet>



            </main>

            <Footer></Footer>
        </>

    );
}