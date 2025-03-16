import classes from "./NewsLetterSignup.module.css";

export default function NewsLetterSignup(){
    return (
        <form method="post" className={classes.newsletter} style={{justifyContent: "center", display: "flex"}}>
            <input
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </form>
    );
}