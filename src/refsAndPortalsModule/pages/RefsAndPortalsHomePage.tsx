import Player from "../components/Player.tsx";
import classes from "./RefsAndPortalsHomePage.module.css";

export default function RefsAndPortalsHomePage() {
    return (
        <>
            <div id="modal"></div>
            <div id="content" className={classes.content}>
                <header className={classes.myHeader}>
                    <h1>The <em>Almost</em> Final Countdown</h1>
                    <p>Stop the timer once you estimate that time is (almost) up</p>
                </header>

                <Player/>
            </div>
        </>
    );
}
