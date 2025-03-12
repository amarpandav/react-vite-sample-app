/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./HomePage.tsx";
import Sample1Page from "./components/sample1/Sample1Page.tsx";
import Sample2Page from "./components/sample2/Sample2Page.tsx";
import Sample3Page from "./components/sample3/Sample3Page.tsx";
import Sample4Page from "./components/sample4/Sample4Page.tsx";
import Sample5Page from "./components/sample5/Sample5Page.tsx";
import Sample6Page from "./components/sample6/Sample6Page.tsx";
import Sample7Page from "./components/sample7/Sample7Page.tsx";
import Sample8Page from "./components/sample8/Sample8Page.tsx";
import RootLayout from "./components/layout/RootLayout.tsx";
import AdminSystemSettings from "./components/admin/adminSysSettings/AdminSystemSettings.tsx";
import AdminHome from "./components/admin/adminHome/AdminHome.tsx";
import AdminLayout from "./components/admin/adminLayout/AdminLayout.tsx";
import RouteErrorPage from "./components/errorPage/RouteErrorPage.tsx";
import Sample9Page from "./components/sample9/Sample9Page.tsx";
import Sample10ProductPage from "./components/sample10/Sample10ProductPage.tsx";
import Sample10ProductDetailsPage from "./components/sample10/Sample10ProductDetailsPage.tsx";
import EventsLayout from "./events-sample-app/eventsLayout/EventsLayout.tsx";
import EventDetailsPage, {loader as eventDetailsLoader} from "./events-sample-app/pages/EventDetailsPage.tsx";
import NewEventPage, {action as newEventAction} from "./events-sample-app/pages/NewEventPage.tsx";
import EditEventPage from "./events-sample-app/pages/EditEventPage.tsx";
import EventsPage from "./events-sample-app/pages/EventsPage.tsx";
//import {ErrorBoundary} from "./components/errorBoundary/ErrorBoundary.tsx";
//import {convertToDate} from "./events-sample-app/utils/dateUtils.ts";

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
        errorElement: <RouteErrorPage></RouteErrorPage>
    },
    {
        path: '/admin',
        element: <AdminLayout></AdminLayout>,
        errorElement: <RouteErrorPage></RouteErrorPage>,
        children: [
            /*
            //option 1: Absolute path
            {path: '/admin/home', element: <AdminHome></AdminHome>},
            {path: '/admin/systemSettings', element: <SystemSettings></SystemSettings>}*/

            /*option 2:Relative path to /admin*/
            {path: 'home', element: <AdminHome></AdminHome>},
            {path: 'systemSettings', element: <AdminSystemSettings></AdminSystemSettings>}
        ]
    },
    {
        path: '/events-module',
        //element: <EventsLayout></EventsLayout>,
        element: <RootLayout></RootLayout>,
        errorElement: <RouteErrorPage></RouteErrorPage>,
        children: [
            /*option 2:Relative path to /events*/
            /*we do not need it as RootLayout is directly navigating to /events{index: true, element: <EventsHomePage></EventsHomePage>},*//*{path: 'home', element: <EventsHomePage></EventsHomePage>},*/
            {
                /* option 1: above it needs <EventsLayout></EventsLayout>
                If you use children in a route, you need to use the Outlet component to render the child routes of the current route.
                Hence in EventsPage.tsx, you need to use the Outlet. But problem is it also renders the EventsPage contents which i don't want hence
                removed this block of code and going ahead with normal rendering.
                path: 'events', element: <EventsPage></EventsPage>, children: [
                    {path: ':eventId', element: <EventDetailsPage></EventDetailsPage>},
                    {path: 'new', element: <NewEventPage></NewEventPage>},
                    {path: ':eventId/edit', element: <EditEventPage></EditEventPage>},
                ]*/
            },
            /*
            option 2: above it needs <EventsLayout></EventsLayout>
            {path: 'events', element: <EventsPage></EventsPage>},
            {path: 'events/:eventId', element: <EventDetailsPage></EventDetailsPage>},
            {path: 'events/new', element: <NewEventPage></NewEventPage>},
            {path: 'events/:eventId/edit', element: <EditEventPage></EditEventPage>},*/

            {
                /*option 3: above it needs <RootLayout></RootLayout>*/
                path: 'events',
                element: <EventsLayout></EventsLayout>,
                children: [
                    {
                        index: true/*path: ''*/, element: <EventsPage></EventsPage>,
                        /* incase you want load the data before visiting EventsPage. You can also move this code into a function inside EventsPage so App.tsx file is leaner.
                        loader: async () => {
                            const response = await fetch('http://localhost:8080/events');
                            if (!response.ok) {
                                // throw new Error('Fetching events failed.');
                                //...lets handle lader
                            } else {
                                const resData = await response.json();
                                const events = resData.events;
                                events.map((event) => {
                                    if (event.eventDate) {
                                        event.eventDate = convertToDate(event.eventDate);
                                    }
                                });
                                return events;
                            }
                        }*/
                        //option 2: outsource code to lead events inside EventsPage. loader: eventsLoader
                    },
                    {
                        path: ':eventId',
                        loader: eventDetailsLoader,
                        id: 'event-detail-id',
                        children: [
                            {
                                index: true,
                                element: /*working: <ErrorBoundary>*/<EventDetailsPage></EventDetailsPage>/*</ErrorBoundary>*/
                            },
                            //{path: ':eventId/edit', element: <EditEventPage></EditEventPage>},
                            //:eventId moved to parent route
                            {path: 'edit', element: <EditEventPage></EditEventPage>}
                        ]

                    },
                    {path: 'new', element: <NewEventPage></NewEventPage>, action: newEventAction},

                ]
            }
        ]
    }


]);
export default function App() {
    return (<RouterProvider router={router}></RouterProvider>

    /*Also not working: <ErrorBoundary fallback={<div>Something went wrong. Please try again later.</div>}>
        <RouterProvider router={router}></RouterProvider>
    </ErrorBoundary>*/
    );
}
