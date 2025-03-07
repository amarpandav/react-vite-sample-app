import {Link, useParams} from "react-router-dom";

export default function Sample10ProductDetailsPage() {

    const params = useParams();


    return (
        <>
            <h2>Product Details</h2>
            <h6>Pass params in address bar after sample10</h6>
            <h6>productId passed is: {params.productId}</h6>

            <Link to=".." relative="path">Back2</Link>
        </>
    );
}