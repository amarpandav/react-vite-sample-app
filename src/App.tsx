/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'*/
import './App.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./homeModule/pages/Home/HomePage.tsx";
import Sample1Page from "./homeModule/pages/Sample1/Sample1Page.tsx";
import Sample2Page from "./homeModule/pages/Sample2/Sample2Page.tsx";
import Sample3Page from "./homeModule/pages/Sample3/Sample3Page.tsx";
import Sample4Page from "./homeModule/pages/Sample4/Sample4Page.tsx";
import Sample5Page from "./homeModule/pages/Sample5/Sample5Page.tsx";
import Sample6Page from "./homeModule/pages/Sample6/Sample6Page.tsx";
import Sample7Page from "./homeModule/pages/Sample7/Sample7Page.tsx";
import Sample8Page from "./homeModule/pages/Sample8/Sample8Page.tsx";
import RootLayout from "./homeModule/layouts/RootLayout.tsx";
import AdminSystemSettings from "./adminModule/components/SysSettings/AdminSystemSettings.tsx";
import AdminHome from "./adminModule/components/Home/AdminHome.tsx";
import AdminLayout from "./adminModule/layouts/AdminLayout.tsx";
import RouteErrorPage from "./homeModule/components/Error/RouteErrorPage.tsx";
import Sample9Page from "./homeModule/pages/Sample9/Sample9Page.tsx";
import Sample10ProductPage from "./homeModule/pages/Sample10/Sample10ProductPage.tsx";
import Sample10ProductDetailsPage from "./homeModule/pages/Sample10/Sample10ProductDetailsPage.tsx";
import EventsLayout from "./eventsModule/layouts/EventsLayout.tsx";
import EventDetailsPage, {
    action as deleteEventAction,
    loader as eventDetailsLoader
} from "./eventsModule/pages/EventDetailsPage.tsx";
import NewEventPage from "./eventsModule/pages/NewEventPage.tsx";
import EditEventPage from "./eventsModule/pages/EditEventPage.tsx";
import {action as eventFormAction} from "./eventsModule/components/EventForm/EventForm.tsx";

import EventsPage, {loader as eventsLoader} from "./eventsModule/pages/EventsPage.tsx";
import HomeModuleLayout from "./homeModule/layouts/HomeModuleLayout.tsx";
import NewsLetterPage, {action as newsLetterAction} from "./homeModule/components/NewsLetter/NewsLetterPage.tsx";
import EventsPageWithSuspenseAndAwait, {
    loader as eventsLoaderWithSuspenseAndAwait
} from "./eventsModule/pages/EventsPageWithSuspenseAndAwait.tsx";
import Sample11Page from "./homeModule/pages/Sample11/Sample11Page.tsx";
import {lazy, Suspense} from "react";
import TTTLayout from "./ticTacToeModule/layouts/TTTLayout.tsx";
import TTTPage from "./ticTacToeModule/pages/TTTPage.tsx";
import Sample13Page from "./homeModule/pages/Sample13/Sample13Page.tsx";
import Sample14Page from "./homeModule/pages/Sample14/Sample14Page.tsx";
import InvestHomePage from "./investModule/pages/InvestHomePage.tsx";
import RefsAndPortalsHomePage from "./refsAndPortalsModule/pages/RefsAndPortalsHomePage.tsx";
//import Sample12Page, {loader as sample12Loader} from "./home-module/sample12/Sample12Page.tsx";
//import {ErrorBoundary} from "./components/errorBoundary/ErrorBoundary.tsx";
//import {convertToDate} from "./events-sample-app/utils/dateUtils.ts";

const Sample12Page = lazy(() => import('./homeModule/pages/Sample12/Sample12Page'));

const router = createBrowserRouter([

    /*{path: '/', element: <HomePage></HomePage>},*/
    {
        path: '/',
        element: <RootLayout></RootLayout>,
        errorElement: <RouteErrorPage></RouteErrorPage>,
        children: [
            {
                path: '',/*other alternative: To turn any route into Index route. {index: true, element: <HomePage></HomePage>} */
                element: <HomeModuleLayout></HomeModuleLayout>,
                children: [
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
                    {path: 'sample11/', element: <Sample11Page></Sample11Page>},
                    {
                        /*path: 'sample12/', element: <Sample12Page></Sample12Page>, loader: sample12Loader*/
                        path: 'sample12/',
                        element: <Suspense fallback={<p>Loading Sample12Page...</p>}><Sample12Page></Sample12Page></Suspense>,
                        loader: (loaderFunctionArgs)=> import('./homeModule/pages/Sample12/Sample12Page').then(module => module.loader(loaderFunctionArgs))
                    },
                    {path: 'sample13/', element: <Sample13Page></Sample13Page>},
                    {path: 'sample14/', element: <Sample14Page></Sample14Page>},

                ]
            },
            {path: 'newsletter', element: <NewsLetterPage></NewsLetterPage>, action: newsLetterAction},
        ]
    },
    {
        path: '/tic-tac-toe-module',
        element: <RootLayout></RootLayout>,
        errorElement: <RouteErrorPage></RouteErrorPage>,
        children: [
            {
                path: '',
                element: <TTTLayout></TTTLayout>,
                children: [
                    /*
            //option 1: Absolute path
            {path: '/admin/home', element: <AdminHome></AdminHome>},
            {path: '/admin/systemSettings', element: <SystemSettings></SystemSettings>}*/

                    /*option 2:Relative path to /admin*/
                    {index: true, element: <TTTPage></TTTPage>}
                ]
            }
        ]
    },
    {
        path: '/refs-and-portals-module',
        element: <RootLayout></RootLayout>,
        errorElement: <RouteErrorPage></RouteErrorPage>,
        children: [
            {
                index: true, element: <RefsAndPortalsHomePage></RefsAndPortalsHomePage>
            }
        ]
    },
    {
        path: '/invest-module',
        element: <RootLayout></RootLayout>,
        errorElement: <RouteErrorPage></RouteErrorPage>,
        children: [
            {
                index: true, element: <InvestHomePage></InvestHomePage>
            }
        ]
    },
    {
        path: '/admin-module',
        element: <RootLayout></RootLayout>,
        errorElement: <RouteErrorPage></RouteErrorPage>,
        children: [
            {
                path: '',
                element: <AdminLayout></AdminLayout>,
                children: [
                    /*
            //option 1: Absolute path
            {path: '/admin/home', element: <AdminHome></AdminHome>},
            {path: '/admin/systemSettings', element: <SystemSettings></SystemSettings>}*/

                    /*option 2:Relative path to /admin*/
                    {path: 'home', element: <AdminHome></AdminHome>},
                    {path: 'systemSettings', element: <AdminSystemSettings></AdminSystemSettings>}
                ]
            }
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
                        index: true/*path: ''*/, element: <EventsPage></EventsPage>, loader: eventsLoader //option 1: outsource code to lead events inside EventsPage.
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
                    },
                    {
                        path: 'events-with-suspense-await',
                        element: <EventsPageWithSuspenseAndAwait></EventsPageWithSuspenseAndAwait>,
                        loader: eventsLoaderWithSuspenseAndAwait
                    },
                    {
                        path: ':eventId',
                        loader: eventDetailsLoader,
                        id: 'event-detail-id',
                        children: [
                            {
                                index: true,
                                element: /*working: <ErrorBoundary>*/<EventDetailsPage></EventDetailsPage>,/*</ErrorBoundary>*/
                                action: deleteEventAction
                            },
                            //{path: ':eventId/edit', element: <EditEventPage></EditEventPage>},
                            //:eventId moved to parent route
                            {
                                path: 'edit',
                                element: <EditEventPage></EditEventPage>,
                                action: eventFormAction/*, action: editEventAction*/
                            }
                        ]

                    },
                    {
                        path: 'new',
                        element: <NewEventPage></NewEventPage>,
                        action: eventFormAction/*, action: newEventAction*/
                    },

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
