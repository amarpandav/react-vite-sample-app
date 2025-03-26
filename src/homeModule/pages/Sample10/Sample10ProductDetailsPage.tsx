import {Link, useParams} from "react-router-dom";

export default function Sample10ProductDetailsPage() {

    const params = useParams();


    return (
        <>
            <h3>Product Details</h3>
            <h6>Pass params in address bar after sample10</h6>
            <h6>productId passed is: {params.productId}</h6>

            <Link to=".." relative="path">Back2</Link>
        </>
    );
}