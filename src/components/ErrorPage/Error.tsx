import HeaderNav from "../Header/HeaderNav.tsx";
import {useRouteError} from "react-router-dom";
import PageContent from "../PageContent/PageContent.tsx";

export default function Error() {
    const error = useRouteError();

    const title = "An error occurred";
    let message = "something went wrong";
    let stack = "";

    console.log("error is:");
    console.log(error);
    console.log("error is end.");

    if (error.data.message) {
        message = error.data.message
    }

    if (error.data.stack) {
        stack = error.data.stack
    }

    return (

        <>
            <HeaderNav></HeaderNav>
            {
                /*
                * <main>
                <h1>An error occurred (custom page)</h1>
                <p>errorStatus: {errorStatus}</p>
            </main>
                * */
            }
            <PageContent title={title}>
                <p>status code: {error.status}</p>
                <p>{message}</p>
                <p>stack: {stack}</p>
            </PageContent>
        </>

    );
}