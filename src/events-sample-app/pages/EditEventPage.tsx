import EventForm from "../eventForm/EventForm.tsx";

export default function EditEventPage() {
    return (
        <>
            <h3>Event Mgmt - Edit Event Page</h3>
            <EventForm /*method='edit' event={eventDto}*/></EventForm>
        </>
    );
}