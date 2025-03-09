import HeaderNav from "../header/HeaderNav.tsx";
import {useRouteError} from "react-router-dom";
import PageContent from "../pageContent/PageContent.tsx";

/*export class ErrorDto {
    status?: number;
    message?: string;
    stack?: string;
    constructor(
        status ?: number,
        message?: string,
        stack?: string) {
        this.status = status;
        this.message = message;
        this.stack = stack;
    }
}*/

export default function Error() {
    /*
    Not working, everything was empty.
    Now i know how to fix it: add this method in ErrorDto. This is overhead hence lets not use ErrorDto
    static fromResponse(error: any): ErrorDto {
        return new ErrorDto(error.status, error.data?.message, error.data?.stack);
    }

    const error = useRouteError() as ErrorDto;
    //const { status, message, stack } = error;

    const title = "An error occurred";
    let message = "something went wrong";
    let stack = "";

    if (error?.message) {
        message = error.message
    }

    if (error?.stack) {
        stack = error.stack
    }*/

    const error = useRouteError() as {data: {message?: string; stack?: string}; status?: number};

    const title = "An error occurred";
    let message = "something went wrong";
    let stack = "";

    console.log("error is:");
    console.log(error);
    console.log("error is end.");

    if (error?.data?.message) {
        message = error?.data?.message
    }

    if (error?.data?.stack) {
        stack = error?.data?.stack
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