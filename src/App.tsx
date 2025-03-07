/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import Sample1Page from "./components/Sample1/Sample1Page.tsx";
import Sample2Page from "./components/Sample2/Sample2Page.tsx";
import Sample3Page from "./components/Sample3/Sample3Page.tsx";
import Sample4Page from "./components/Sample4/Sample4Page.tsx";
import Sample5Page from "./components/Sample5/Sample5Page.tsx";
import Sample6Page from "./components/Sample6/Sample6Page.tsx";
import Sample7Page from "./components/Sample7/Sample7Page.tsx";
import Sample8Page from "./components/Sample8/Sample8Page.tsx";
import RootLayout from "./components/RootLayout/RootLayout.tsx";
import SystemSettings from "./components/RootLayoutAdmin/SystemSettings.tsx";
import AdminHome from "./components/RootLayoutAdmin/AdminHome.tsx";
import RootLayoutAdmin from "./components/RootLayoutAdmin/RootLayoutAdmin.tsx";
import Error from "./components/ErrorPage/Error.tsx";
import Sample9Page from "./components/Sample9/Sample9Page.tsx";
import Sample10ProductPage from "./components/Sample10/Sample10ProductPage.tsx";
import Sample10ProductDetailsPage from "./components/Sample10/Sample10ProductDetailsPage.tsx";

const router = createBrowserRouter([

    /*{path: '/', element: <HomePage></HomePage>},*/
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        children: [
            {path: '/', element: <HomePage></HomePage>}, /*other alternative: To turn any route into Index route. {index: true, element: <HomePage></HomePage>} */
            //option 1: Absolute path
            //{path: '/home', element: <HomePage></HomePage>},
            //{path: '/sample1', element: <Sample1Page></Sample1Page>},

            //option 2: Relative path
            {path: 'home', element: <HomePage></HomePage>},
            {path: 'sample1', element: <Sample1Page></Sample1Page>},
            {path: 'sample2', element: <Sample2Page></Sample2Page>},
            {path: 'sample3', element: <Sample3Page></Sample3Page>},
            {path: 'sample4', element: <Sample4Page></Sample4Page>},
            {path: 'sample5', element: <Sample5Page></Sample5Page>},
            {path: 'sample6', element: <Sample6Page></Sample6Page>},
            {path: 'sample7', element: <Sample7Page></Sample7Page>},
            {path: 'sample8', element: <Sample8Page></Sample8Page>},
            {path: 'sample9', element: <Sample9Page></Sample9Page>},
            {path: 'sample10/', element: <Sample10ProductPage></Sample10ProductPage>},
            {path: 'sample10/:productId', element: <Sample10ProductDetailsPage></Sample10ProductDetailsPage>},
        ],
        errorElement: <Error></Error>
    },
    {
        path: '/admin',
        element: <RootLayoutAdmin></RootLayoutAdmin>,
        children: [
            /*
            //option 1: Absolute path
            {path: '/admin/home', element: <AdminHome></AdminHome>},
            {path: '/admin/systemSettings', element: <SystemSettings></SystemSettings>}*/

            /*option 2:Relative path to /admin*/
            {path: 'home', element: <AdminHome></AdminHome>},
            {path: 'systemSettings', element: <SystemSettings></SystemSettings>}
        ]
    },


]);
export default function App() {
    return <RouterProvider router={router}></RouterProvider>;
}
