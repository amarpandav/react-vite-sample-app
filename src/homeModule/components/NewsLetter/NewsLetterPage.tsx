import NewsLetterSignup from "./NewsLetterSignup.tsx";
import {ActionFunctionArgs} from "react-router-dom";

export default function NewsLetterPage() {

    return (
        <>
            <h2>Join our awesome newsletter!</h2>
            {/*<div style={{float:'center'}}>*/}

            <NewsLetterSignup></NewsLetterSignup>

            {/*</div>*/}
        </>
    );

}

export async function action( {request/*, params*/}: ActionFunctionArgs){
    const formDataPromise = await request.formData();
    const email = formDataPromise.get("my-email");
    console.log("NewsLetterPage.action got call. email is: "+email);
    return {message: "Signup successful for "+email};
}