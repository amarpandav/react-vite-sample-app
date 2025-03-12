import {useRouteError} from "react-router-dom";
import Error from "./Error.tsx";
import {useEffect, useState} from "react";

export default function RouteErrorPage() {
    //const error = useRouteError() as { data: { message?: string; stack?: string }; status: number };
    const error = useRouteError() as { data: { message?: string; stack?: string }; status: number };

    const title = "An error occurred";
    let message = "something went wrong";
    let stack = "";

    console.log("error is: "+JSON.stringify(error));
    //console.log(error);

    if (error?.data?.message) {
        message = error?.data?.message
    }

    if (error?.data?.stack) {
        stack = error?.data?.stack
    }
    return (

        <>
            <Error title='An error occurred' status={error.status} message={message} stack={stack}></Error>
        </>

    );
}



export async function throwError(message: string, response) {
    let error;
    try {
        error = await response.json();
    } catch (error) {
        console.log("error in throwError .catch is: " + error);
        const stack = response.url + " " + response.statusText + ". " + JSON.stringify(error);
        throw Response.json(
            {message: message, stack: stack},
            {status: response.status},
        )

        //throw new Response(JSON.stringify({message: message, stack: stack}), {status: response.status});
    }

    let stack = error.message;
    if (error.errors) {
        stack = stack + " " + JSON.stringify(error.errors);
    }
    if (error.stack) {
        stack = stack + " " + error.stack;
    }
    throw Response.json(
        {message: message, stack: stack},
        {status: response.status},
    );
    //throw new Response(JSON.stringify({message: message, stack: stack}), {status: response.status});
}