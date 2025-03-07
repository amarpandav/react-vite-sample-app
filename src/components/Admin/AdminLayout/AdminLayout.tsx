import reactImg from "../../../assets/react.svg";
import {Outlet} from "react-router-dom";
import AdminHeaderNav from "../AdminHeader/AdminHeaderNav.tsx";

export default function AdminLayout() {

    return (
        <>
            <h1><img src={reactImg} alt="title"/>React Sample App/Admin mode</h1>
            <AdminHeaderNav></AdminHeaderNav>

            <Outlet></Outlet>

        </>

    );
}