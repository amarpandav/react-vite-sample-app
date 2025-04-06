import Player from "../components/Player/Player.tsx";
import classes from "./RefsAndPortalsHomePage.module.css";
import TimerChallenge from "../components/TimerChallenge/TimeChallenge.tsx";

export default function RefsAndPortalsHomePage() {
    return (
        <>
            <div id="content" className={classes.content}>
                <header className={classes.myHeader}>
                    <h1>The <em>Almost</em> Final Countdown</h1>
                    <p>Stop the timer once you estimate that time is (almost) up</p>
                </header>

                <Player/>
                <div id="challenges" className={classes.challenges}>
                    <TimerChallenge title='Easy' targetTimeInSecs={1} />
                    <TimerChallenge title='Not Easy' targetTimeInSecs={5} />
                    <TimerChallenge title='Getting tough' targetTimeInSecs={10} />
                    <TimerChallenge title='Pros only' targetTimeInSecs={15} />
                </div>
            </div>
        </>
    );
}
