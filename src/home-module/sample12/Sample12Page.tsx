import {LoaderFunctionArgs} from "react-router-dom";

export default function Sample12Page() {

    return (

        <>
            <section>
                <h5>Main Page</h5>
                <p>
                    Goto any other page - Network tab - refresh - Sample12Page page is loaded even though you do not want to visit that page.
                </p>
            </section>
        </>
    );
}

export async function loader({request, params}: LoaderFunctionArgs) {
    console.log("Sample12Page.loader:",request, params);
}
