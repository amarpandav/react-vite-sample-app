import {Link, useParams} from "react-router-dom";

export default function EventDetailsPage() {
    const params = useParams();

    return (
        <>
            <h3>Event Details Page</h3>
            <h6>Pass params in address bar after sample10</h6>
            <h6>productId passed is: {params.eventId}</h6>

            <Link to=".." relative="path">Back2</Link>
        </>
    );
}