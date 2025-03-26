import EventForm from "../components/EventForm/EventForm.tsx";
import {Link} from "react-router-dom";
export default function NewEventPage() {
    return (
        <>
            <EventForm method="POST"/>
            <Link to=".." relative="path">Back to Events</Link>
        </>
    );
}

/*
export async function action({request, params}: LoaderFunctionArgs) {
    const data = await request.formData();

    //works but ts error - const eventAsJson = EventDto.toJson(data.get('title'), data.get('eventDate'), data.get('image'), data.get('description'));
    const eventAsJson = EventDto.toJson(data.get('title') as string, data.get('eventDate') as string, data.get('image') as string, data.get('description') as string);

    //to test invalid data so that backend throws errors and status code 422. uncomment below code and see
    //const eventAsJson = EventDto.toJson(data.get('title'), null, null, data.get('description'));

    //console.log(JSON.stringify(eventAsJson));
    const response = await fetch('http://localhost:8080/events', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(eventAsJson),


    });


    * calling response.json() multiple times would cause error Failed to execute 'json' on 'Response': body stream already read
    * But we are calling  response.json() only once. No... we are returning response in case of 422 which will read response.
    * we can't read response multiple time.

    //console.log("NewEventPage.action.response: ",response.json());

    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if(response.status == 422){
        return response;
    }else if (!response.ok) {
        //optional error handling. mostly we will have a toaster message or a modal to show the error.
        await throwError('Creating new event failed (method: NewEventPage.action).', response);
    }

    return redirect("/events-module/events");
}*/