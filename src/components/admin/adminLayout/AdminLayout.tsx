import {Outlet} from "react-router-dom";
import AdminHeaderNav from "../adminHeader/AdminHeaderNav.tsx";

export default function AdminLayout() {

    return (
        <>
            <h2>Admin App</h2>

            <AdminHeaderNav></AdminHeaderNav>

            <main>
                <Outlet></Outlet>
            </main>


        </>

    );
}