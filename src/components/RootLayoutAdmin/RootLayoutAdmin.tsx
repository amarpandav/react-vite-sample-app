import reactImg from "../../assets/react.svg";
import {Outlet} from "react-router-dom";
import HeaderNavAdmin from "./HeaderNavAdmin.tsx";

export default function RootLayoutAdmin() {

    return (
        <>
            <h1><img src={reactImg} alt="title"/>React Sample App/Admin mode</h1>
            <HeaderNavAdmin></HeaderNavAdmin>

            <Outlet></Outlet>

        </>

    );
}