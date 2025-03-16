import classes from "./NewsLetterSignup.module.css";
import {useFetcher} from "react-router-dom";
import {useEffect} from "react";

export default function NewsLetterSignup(){
    const fetcher = useFetcher();
    const {data, state} = fetcher;
    useEffect(() => {
        if(state === 'idle' && data && data.message){
            window.alert(data.message);
        }

    }, [data, state]);

    return (
        <fetcher.Form method="post"
                      className={classes.newsletter}
                      style={{justifyContent: "center", display: "flex"}}
        action="/newsletter">
            <input
                type="email"
                name="my-email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
                defaultValue="amar@gmail.com"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}