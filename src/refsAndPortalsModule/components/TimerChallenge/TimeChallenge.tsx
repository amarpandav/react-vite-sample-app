import classes from "../TimerChallenge/Timerchallenge.module.css";

interface Props {
    title: string;
    targetTime: number;
}

export default function TimerChallenge({title, targetTime}: Props) {

    return (
        <section id="player" className={classes.challenge}>
            <h2>{title}</h2>
            <p className={classes.challengeTime}>
                {targetTime} second{targetTime > 1 ? 's' : ''}
            </p>
            <p>
                <button>
                    Start Challenge
                </button>
            </p>
            <p>
                Time is running.... Time is inactive
            </p>
        </section>
    );
}
